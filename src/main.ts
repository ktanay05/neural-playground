import './style.css';
import * as tf from '@tensorflow/tfjs';
import * as d3 from 'd3';
import { PlaygroundModel } from './network/model';
import type { NetConfig } from './network/model';
import { generateData, splitData } from './network/dataset';
import type { Point } from './network/dataset';
import { FEATURES, transform, activeFeatures } from './network/features';
import { drawHeatmap, drawColorScale } from './viz/heatmap';
import { drawLossChart } from './viz/lossChart';
import { renderNetwork, NET_WIDTH, NET_MARGIN } from './viz/networkGraph';

// --- State ---
let running = false;
let animationId = 0;
const model = new PlaygroundModel();
let train: Point[] = [];
let test: Point[] = [];
let xs: tf.Tensor, ys: tf.Tensor, testXs: tf.Tensor, testYs: tf.Tensor;
let hiddenLayers = [4, 2];
const trainLossHist: number[] = [];
const testLossHist: number[] = [];

// --- DOM helpers ---
const $ = (id: string) => document.getElementById(id) as HTMLElement;
const getVal = (id: string) => ($(id) as HTMLSelectElement | HTMLInputElement).value;
const svg = d3.select<SVGSVGElement, unknown>('#netSvg');
const heatCanvas = $('heatmap') as HTMLCanvasElement;
const heatCtx = heatCanvas.getContext('2d')!;
const lossCtx = ($('lossChart') as HTMLCanvasElement).getContext('2d')!;

// --- Config ---
function readConfig(): NetConfig {
  return {
    hiddenLayers: [...hiddenLayers],
    activation: getVal('activation') as NetConfig['activation'],
    learningRate: parseFloat(getVal('lr')),
    regularization: getVal('reg') as NetConfig['regularization'],
    regRate: parseFloat(getVal('regRate')),
    problemType: getVal('problem') as NetConfig['problemType'],
  };
}

// --- Feature checkboxes ---
function buildFeatureUI() {
  const list = $('featureList');
  list.innerHTML = '';
  FEATURES.forEach(f => {
    const lbl = document.createElement('label');
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = f.enabled;
    cb.onchange = () => {
      f.enabled = cb.checked;
      if (activeFeatures().length === 0) { f.enabled = true; cb.checked = true; }
      rebuild();
    };
    lbl.appendChild(cb);
    lbl.appendChild(document.createTextNode(' ' + f.label));
    list.appendChild(lbl);
  });
}

// --- Layer / neuron controls ---
function buildNeuronUI() {
  $('layerCount').textContent = String(hiddenLayers.length);
  const box = $('neuronControls');
  box.innerHTML = '';

  // Same math as networkGraph.ts so buttons align to layers
  const totalLayers = hiddenLayers.length + 2; // input + hidden + output
  const layerGap = (NET_WIDTH - 2 * NET_MARGIN) / (totalLayers - 1);

  hiddenLayers.forEach((count, i) => {
    const xPos = (i + 1) * layerGap + NET_MARGIN; // hidden layer i => index i+1
    const group = document.createElement('div');
    group.className = 'neuron-group';
    group.style.left = `${xPos}px`;
    // + on top, number in middle, − below
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
      rebuild();
    })
  );
  box.querySelectorAll('button[data-dec]').forEach(b =>
    b.addEventListener('click', () => {
      const i = +(b as HTMLElement).getAttribute('data-dec')!;
      if (hiddenLayers[i] > 1) hiddenLayers[i]--;
      rebuild();
    })
  );
}

// --- Data ---
function loadData() {
  const noise = parseFloat(getVal('noise'));
  const ratio = parseInt(getVal('ratio')) / 100;
  const all = generateData(getVal('dataset'), 200, noise);
  const split = splitData(all, ratio);
  train = split.train;
  test = split.test;

  [xs, ys, testXs, testYs].forEach(t => t && t.dispose());
  xs = tf.tensor2d(train.map(p => transform(p.x, p.y)));
  ys = tf.tensor2d(train.map(p => [p.label]));
  testXs = tf.tensor2d(test.map(p => transform(p.x, p.y)));
  testYs = tf.tensor2d(test.map(p => [p.label]));
}

// --- Rebuild ---
function rebuild() {
  running = false;
  ($('runBtn') as HTMLButtonElement).textContent = '▶ Run';
  cancelAnimationFrame(animationId);
  trainLossHist.length = 0;
  testLossHist.length = 0;

  buildNeuronUI();
  loadData();
  model.build(readConfig(), activeFeatures().length);
  updateEpoch();
  redraw();
}

function updateEpoch() {
  $('epochCount').textContent = String(model.epoch).padStart(6, '0');
}

function redraw() {
  const showTest = ($('showTest') as HTMLInputElement).checked;
  renderNetwork(svg, readConfig(), model.getWeights());
  drawHeatmap(heatCtx, model, heatCanvas.width, train, test, showTest);
  drawLossChart(lossCtx, 220, 120, trainLossHist, testLossHist);
}

async function step() {
  const batch = parseInt(getVal('batch'));
  const loss = await model.trainStep(xs, ys, batch);
  const tLoss = test.length ? model.evaluate(testXs, testYs) : 0;

  trainLossHist.push(loss);
  testLossHist.push(tLoss);
  if (trainLossHist.length > 200) { trainLossHist.shift(); testLossHist.shift(); }

  updateEpoch();
  $('trainLoss').textContent = loss.toFixed(3);
  $('testLoss').textContent = tLoss.toFixed(3);
  redraw();
}

async function loop() {
  if (!running) return;
  await step();
  animationId = requestAnimationFrame(loop);
}

// --- Buttons ---
$('runBtn').onclick = () => {
  running = !running;
  ($('runBtn') as HTMLButtonElement).textContent = running ? '⏸ Pause' : '▶ Run';
  if (running) loop();
};
$('stepBtn').onclick = () => {
  running = false;
  ($('runBtn') as HTMLButtonElement).textContent = '▶ Run';
  step();
};
$('resetBtn').onclick = rebuild;

$('addLayer').onclick = () => {
  if (hiddenLayers.length < 15) { hiddenLayers.push(3); rebuild(); }
};
$('removeLayer').onclick = () => {
  if (hiddenLayers.length > 1) { hiddenLayers.pop(); rebuild(); }
};

$('showTest').addEventListener('change', redraw);

// Slider live labels
$('ratio').addEventListener('input', () => {
  $('ratioVal').textContent = getVal('ratio');
});
$('noise').addEventListener('input', () => {
  $('noiseVal').textContent = parseFloat(getVal('noise')).toFixed(1);
});
$('batch').addEventListener('input', () => {
  $('batchVal').textContent = getVal('batch');
});

// Rebuild on control changes
['dataset', 'ratio', 'noise', 'batch', 'lr', 'activation', 'reg', 'regRate', 'problem']
  .forEach(id => $(id).addEventListener('change', rebuild));

// --- Init ---
buildFeatureUI();
drawColorScale($('colorScale') as HTMLCanvasElement);
rebuild();