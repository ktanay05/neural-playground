import { simulate } from './simulator';
import type { PlantParams, SimParams, Gains } from './simulator';
import { drawResponse } from './controlChart';
import { computeMetrics } from './metrics';
import { intentToWeights, computeCost } from './costFunction';
import type { Intent } from './costFunction';
import { GainNetwork } from './controlNN';
import type { NNConfig } from './controlNN';
import { trainGeneration } from './trainer';
import type { TrainContext } from './trainer';
import { renderControlNet, CP_NET_WIDTH, CP_NET_MARGIN } from './controlNetGraph';
import { drawCostChart } from './lossChart';
import * as d3 from 'd3';

const $ = (id: string) => document.getElementById(id) as HTMLElement;
const val = (id: string) => parseFloat(($(id) as HTMLInputElement).value);

let chartCtx: CanvasRenderingContext2D;
let lossCtx: CanvasRenderingContext2D;
let netSvg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;

let net: GainNetwork | null = null;
let training = false;
let generation = 0;
let trainAnimId = 0;
let hiddenLayers = [8, 8];
const costHist: number[] = [];

// ---------- Readers ----------
function readPlant(): PlantParams {
  return { m: val('cp-m'), c: val('cp-c'), k: val('cp-k') };
}
function readGains(): Gains {
  return { Kp: val('cp-kp'), Ki: val('cp-ki'), Kd: val('cp-kd') };
}
function readSim(): SimParams {
  return { dt: 0.02, steps: 300, setpoint: 1.0, noise: val('cp-noise') };
}
function readIntent(): Intent {
  return { aggressiveness: val('cp-aggr'), robustness: val('cp-robust') };
}
function readNNConfig(): NNConfig {
  return {
    hiddenLayers: [...hiddenLayers],
    activation: ($('cp-nnact') as HTMLSelectElement).value as NNConfig['activation'],
    gainScale: val('cp-scale'),
  };
}
function currentContext(): TrainContext {
  return { plant: readPlant(), sim: readSim(), intent: readIntent() };
}

// ---------- Simulation display ----------
function update() {
  // Update slider value labels
  ['noise', 'kp', 'ki', 'kd', 'aggr', 'robust', 'scale'].forEach(key => {
    const el = document.getElementById(`cp-${key}Val`);
    if (el) el.textContent = ($(`cp-${key}`) as HTMLInputElement).value;
  });

  const sim = readSim();
  const data = simulate(readGains(), readPlant(), sim);
  drawResponse(chartCtx, 640, 380, data, sim.setpoint);

  const m = computeMetrics(data, sim.setpoint, sim.dt);
  $('cp-overshoot').textContent = m.overshoot.toFixed(1) + '%';
  $('cp-settle').textContent = m.settleTime.toFixed(2) + ' s';
  $('cp-sserror').textContent = m.steadyError.toFixed(3);

  const weights = intentToWeights(readIntent());
  const cost = computeCost(data, sim.setpoint, sim.dt, weights);
  $('cp-cost').textContent = cost.toFixed(3);
}

// ---------- Neural network ----------
function buildNeuronUI() {
  $('cp-layerCount').textContent = String(hiddenLayers.length);
  const box = $('cp-neuronControls');
  box.innerHTML = '';
  const totalLayers = hiddenLayers.length + 2;
  const layerGap = (CP_NET_WIDTH - 2 * CP_NET_MARGIN) / (totalLayers - 1);
  hiddenLayers.forEach((count, i) => {
    const xPos = (i + 1) * layerGap + CP_NET_MARGIN;
    const group = document.createElement('div');
    group.className = 'neuron-group';
    group.style.left = `${xPos}px`;
    group.innerHTML = `
      <button data-inc="${i}">+</button>
      <b>${count}</b>
      <button data-dec="${i}">−</button>`;
    box.appendChild(group);
  });
  box.querySelectorAll('button[data-inc]').forEach(b =>
    b.addEventListener('click', () => {
      const i = +(b as HTMLElement).getAttribute('data-inc')!;
      if (hiddenLayers[i] < 15) hiddenLayers[i]++;
      buildNet();
    })
  );
  box.querySelectorAll('button[data-dec]').forEach(b =>
    b.addEventListener('click', () => {
      const i = +(b as HTMLElement).getAttribute('data-dec')!;
      if (hiddenLayers[i] > 1) hiddenLayers[i]--;
      buildNet();
    })
  );
}

function buildNet() {
  training = false;
  ($('cp-train') as HTMLButtonElement).textContent = '▶ Train';
  cancelAnimationFrame(trainAnimId);

  net?.dispose();
  net = new GainNetwork();
  net.build(readNNConfig());
  generation = 0;
  costHist.length = 0;
  $('cp-gen').textContent = '0';
  $('cp-bestcost').textContent = '–';
  buildNeuronUI();
  renderControlNet(netSvg, hiddenLayers);
  drawCostChart(lossCtx, 640, 140, costHist);
  showLearnedGains();
}

function showLearnedGains() {
  if (!net) return;
  const ctx = currentContext();
  const input = [
    ctx.plant.m, ctx.plant.c, ctx.plant.k,
    ctx.intent.aggressiveness, ctx.intent.robustness,
  ];
  const g = net.predictGains(input);
  $('cp-learned-kp').textContent = g.Kp.toFixed(2);
  $('cp-learned-ki').textContent = g.Ki.toFixed(2);
  $('cp-learned-kd').textContent = g.Kd.toFixed(2);
}

function trainLoop() {
  if (!training || !net) return;
  const ctx = currentContext();
  const pop = parseInt(($('cp-pop') as HTMLSelectElement).value);
  const sigma = parseFloat(($('cp-lr') as HTMLSelectElement).value);

  let best = 0;
  for (let i = 0; i < 3; i++) {
    best = trainGeneration(net, ctx, pop, sigma);
    generation++;
  }
  costHist.push(best);
  if (costHist.length > 300) costHist.shift();

  $('cp-gen').textContent = String(generation);
  $('cp-bestcost').textContent = best.toFixed(3);
  drawCostChart(lossCtx, 640, 140, costHist);
  showLearnedGains();
  trainAnimId = requestAnimationFrame(trainLoop);
}

function applyLearnedGains() {
  if (!net) return;
  const ctx = currentContext();
  const input = [
    ctx.plant.m, ctx.plant.c, ctx.plant.k,
    ctx.intent.aggressiveness, ctx.intent.robustness,
  ];
  const g = net.predictGains(input);
  const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
  ($('cp-kp') as HTMLInputElement).value = String(clamp(g.Kp, 0, 100));
  ($('cp-ki') as HTMLInputElement).value = String(clamp(g.Ki, 0, 50));
  ($('cp-kd') as HTMLInputElement).value = String(clamp(g.Kd, 0, 50));
  update();
}

// ---------- Init ----------
export function initControlApp() {
  chartCtx = ($('cp-chart') as HTMLCanvasElement).getContext('2d')!;
  lossCtx = ($('cp-lossChart') as HTMLCanvasElement).getContext('2d')!;
  netSvg = d3.select<SVGSVGElement, unknown>('#cp-netSvg');

  // Simulation-affecting controls
  ['cp-m', 'cp-c', 'cp-k', 'cp-kp', 'cp-ki', 'cp-kd', 'cp-noise',
   'cp-aggr', 'cp-robust'].forEach(id => {
    $(id).addEventListener('input', update);
  });

  // Gain-scale label
  $('cp-scale').addEventListener('input', () => {
    const el = document.getElementById('cp-scaleVal');
    if (el) el.textContent = ($('cp-scale') as HTMLInputElement).value;
  });

  // Train / reset
  $('cp-train').addEventListener('click', () => {
    training = !training;
    ($('cp-train') as HTMLButtonElement).textContent = training ? '⏸ Pause' : '▶ Train';
    if (training) trainLoop();
    else cancelAnimationFrame(trainAnimId);
  });
  $('cp-rebuild').addEventListener('click', buildNet);
  $('cp-apply').addEventListener('click', applyLearnedGains);

  // Layer add/remove
  $('cp-addLayer').addEventListener('click', () => {
    if (hiddenLayers.length < 8) { hiddenLayers.push(4); buildNet(); }
  });
  $('cp-removeLayer').addEventListener('click', () => {
    if (hiddenLayers.length > 1) { hiddenLayers.pop(); buildNet(); }
  });

  // Rebuild net when these change
  ['cp-nnact', 'cp-reg', 'cp-regRate', 'cp-scale'].forEach(id => {
    $(id).addEventListener('change', buildNet);
  });

  update();
  buildNet();
}