// Spring-Mass-Damper plant controlled by a PID controller.
// Plant:  m*x'' + c*x' + k*x = F(t)
// PID:    F = Kp*e + Ki*∫e dt + Kd*de/dt,   e = setpoint - x
// Integrated with RK4-ish semi-implicit Euler (stable + simple).

export interface PlantParams {
  m: number;   // mass
  c: number;   // damping
  k: number;   // stiffness
}

export interface SimParams {
  dt: number;       // timestep (s)
  steps: number;    // number of steps
  setpoint: number; // target position
  noise: number;    // measurement noise std-dev (0 = none)
}

export interface Gains {
  Kp: number;
  Ki: number;
  Kd: number;
}

export interface SimPoint {
  t: number;   // time
  x: number;   // position (measured/plotted)
  xTrue: number; // true position (no noise)
  error: number;
  F: number;   // control force
}

export function simulate(
  gains: Gains,
  plant: PlantParams,
  sim: SimParams
): SimPoint[] {
  const { Kp, Ki, Kd } = gains;
  const { m, c, k } = plant;
  const { dt, steps, setpoint, noise } = sim;

  let x = 0;        // true position
  let v = 0;        // true velocity
  let integral = 0;
  let prevError = setpoint;

  const out: SimPoint[] = [];

  for (let i = 0; i < steps; i++) {
    // Measurement (optionally noisy) — what the controller "sees"
    const measured = x + (noise > 0 ? gaussian() * noise : 0);
    const error = setpoint - measured;

    integral += error * dt;
    const derivative = (error - prevError) / dt;

    // PID control force
    const F = Kp * error + Ki * integral + Kd * derivative;

    // Newton: a = (F - c*v - k*x) / m
    const a = (F - c * v - k * x) / m;

    // Semi-implicit Euler (update v first, then x — more stable)
    v += a * dt;
    x += v * dt;

    prevError = error;

    out.push({ t: i * dt, x: measured, xTrue: x, error, F });
  }

  return out;
}

// Box-Muller gaussian noise
function gaussian(): number {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
