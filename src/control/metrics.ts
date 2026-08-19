import type { SimPoint } from './simulator';

export interface Metrics {
  overshoot: number;    // % above setpoint
  settleTime: number;   // time to stay within 2% band (s)
  steadyError: number;  // final absolute error
  controlEffort: number; // sum of F^2 (aggressiveness proxy)
}

export function computeMetrics(data: SimPoint[], setpoint: number, dt: number): Metrics {
  let peak = -Infinity, effort = 0;
  for (const d of data) {
    peak = Math.max(peak, d.xTrue);
    effort += d.F * d.F;
  }
  const overshoot = setpoint !== 0 ? Math.max(0, (peak - setpoint) / setpoint) * 100 : 0;

  // Settling time: last index where |error| > 2% of setpoint
  const band = 0.02 * Math.abs(setpoint);
  let settleIdx = 0;
  for (let i = data.length - 1; i >= 0; i--) {
    if (Math.abs(setpoint - data[i].xTrue) > band) { settleIdx = i; break; }
  }
  const settleTime = settleIdx * dt;

  const steadyError = Math.abs(setpoint - data[data.length - 1].xTrue);

  return { overshoot, settleTime, steadyError, controlEffort: effort };
}
