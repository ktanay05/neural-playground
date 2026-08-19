import type { SimPoint } from './simulator';

// User intent, each 0..1
export interface Intent {
  aggressiveness: number; // 1 = wants fast response, tolerates effort/overshoot
  robustness: number;     // 1 = wants smooth, low-effort, low-overshoot
}

// Weights applied to each cost term
export interface CostWeights {
  track: number;      // penalize tracking error (getting to setpoint)
  effort: number;     // penalize control force (aggressiveness cost)
  overshoot: number;  // penalize going past setpoint
  settle: number;     // penalize slow settling
}

// Map the two intent sliders into concrete cost weights.
// This is the "personality" of the tuner — tweak freely.
export function intentToWeights(intent: Intent): CostWeights {
  const a = intent.aggressiveness;
  const r = intent.robustness;

  return {
    // Always care about reaching the target
    track: 1.0,

    // Aggressive users tolerate effort (low weight);
    // robust users penalize it (high weight)
    effort: 0.0005 * (1 - a) + 0.002 * r,

    // Robust users hate overshoot; aggressive users tolerate it
    overshoot: 0.5 * r + 0.05 * (1 - a),

    // Aggressive users hate slow settling (want speed)
    settle: 2.0 * a + 0.2,
  };
}

// Compute scalar cost J from a simulation trajectory.
export function computeCost(
  data: SimPoint[],
  setpoint: number,
  dt: number,
  w: CostWeights
): number {
  let trackErr = 0;
  let effort = 0;
  let peak = -Infinity;

  for (const d of data) {
    trackErr += d.error * d.error * dt;   // integral of squared error
    effort += d.F * d.F * dt;             // integral of squared force
    peak = Math.max(peak, d.xTrue);
  }

  const overshoot = setpoint !== 0
    ? Math.max(0, (peak - setpoint) / setpoint)
    : 0;

  // Settling time (2% band)
  const band = 0.02 * Math.abs(setpoint);
  let settleIdx = 0;
  for (let i = data.length - 1; i >= 0; i--) {
    if (Math.abs(setpoint - data[i].xTrue) > band) { settleIdx = i; break; }
  }
  const settleTime = settleIdx * dt;

  return (
    w.track * trackErr +
    w.effort * effort +
    w.overshoot * overshoot +
    w.settle * settleTime
  );
}
