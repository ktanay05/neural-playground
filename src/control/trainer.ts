import { GainNetwork, perturb } from './controlNN';
import { simulate } from './simulator';
import type { PlantParams, SimParams } from './simulator';
import { intentToWeights, computeCost } from './costFunction';
import type { Intent } from './costFunction';

export interface TrainContext {
  plant: PlantParams;
  sim: SimParams;
  intent: Intent;
}

// Evaluate a set of network weights: predict gains, simulate, return cost J.
export function evaluate(net: GainNetwork, ctx: TrainContext): number {
  const input = [
    ctx.plant.m, ctx.plant.c, ctx.plant.k,
    ctx.intent.aggressiveness, ctx.intent.robustness,
  ];
  const gains = net.predictGains(input);

  // Guard against exploding sims
  if (!isFinite(gains.Kp + gains.Ki + gains.Kd)) return 1e9;

  const data = simulate(gains, ctx.plant, ctx.sim);
  const last = data[data.length - 1];
  if (!isFinite(last.xTrue)) return 1e9; // diverged

  const w = intentToWeights(ctx.intent);
  return computeCost(data, ctx.sim.setpoint, ctx.sim.dt, w);
}

// One generation of a simple (1+POP) evolution strategy.
// Returns the best cost this generation.
export function trainGeneration(
  net: GainNetwork,
  ctx: TrainContext,
  popSize = 20,
  sigma = 0.15
): number {
  const baseWeights = net.getFlatWeights();
  const baseCost = evaluate(net, ctx);

  let bestWeights = baseWeights;
  let bestCost = baseCost;

  for (let i = 0; i < popSize; i++) {
    const candidate = perturb(baseWeights, sigma);
    net.setFlatWeights(candidate);
    const cost = evaluate(net, ctx);
    if (cost < bestCost) {
      bestCost = cost;
      bestWeights = candidate;
    }
  }

  // Keep the best
  net.setFlatWeights(bestWeights);
  return bestCost;
}
