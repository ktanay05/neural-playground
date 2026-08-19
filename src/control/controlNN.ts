import * as tf from '@tensorflow/tfjs';

// Network maps [m, c, k, aggressiveness, robustness] -> [Kp, Ki, Kd]
// Trained with a simple evolution strategy (gradient-free), so it works
// with the existing plain-JS simulator + cost function.

export interface NNConfig {
  hiddenLayers: number[];      // e.g. [8, 8]
  activation: 'relu' | 'tanh' | 'sigmoid';
  gainScale: number;           // max gain magnitude (output scaling)
}

export class GainNetwork {
  model!: tf.LayersModel;
  config!: NNConfig;

  build(config: NNConfig) {
    this.config = config;
    this.model?.dispose();

    const layers: tf.layers.Layer[] = [];
    layers.push(
      tf.layers.dense({
        units: config.hiddenLayers[0] ?? 8,
        activation: config.activation,
        inputShape: [5],
      })
    );
    for (let i = 1; i < config.hiddenLayers.length; i++) {
      layers.push(
        tf.layers.dense({
          units: config.hiddenLayers[i],
          activation: config.activation,
        })
      );
    }
    // Output 3 gains, softplus keeps them >= 0
    layers.push(tf.layers.dense({ units: 3, activation: 'softplus' }));

    this.model = tf.sequential({ layers });
  }

  // Forward pass: inputs -> [Kp, Ki, Kd]
  predictGains(input: number[]): { Kp: number; Ki: number; Kd: number } {
    return tf.tidy(() => {
      const x = tf.tensor2d([input]);
      const out = this.model.predict(x) as tf.Tensor;
      const [kp, ki, kd] = Array.from(out.dataSync());
      const s = this.config.gainScale;
      return { Kp: kp * s, Ki: ki * s, Kd: kd * s };
    });
  }

  // --- Evolution-strategy helpers: get/set all weights as a flat vector ---
  getFlatWeights(): Float32Array {
    const arrs = this.model.getWeights().map(w => w.dataSync());
    const total = arrs.reduce((n, a) => n + a.length, 0);
    const flat = new Float32Array(total);
    let off = 0;
    for (const a of arrs) { flat.set(a, off); off += a.length; }
    return flat;
  }

  setFlatWeights(flat: Float32Array) {
    const shapes = this.model.getWeights().map(w => w.shape);
    const newTensors: tf.Tensor[] = [];
    let off = 0;
    for (const shape of shapes) {
      const size = shape.reduce((a, b) => a * b, 1);
      const slice = flat.slice(off, off + size);
      newTensors.push(tf.tensor(slice, shape));
      off += size;
    }
    this.model.setWeights(newTensors);
    newTensors.forEach(t => t.dispose());
  }

  dispose() {
    this.model?.dispose();
  }
}

// Gaussian random
function randn(): number {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export function perturb(base: Float32Array, sigma: number): Float32Array {
  const out = new Float32Array(base.length);
  for (let i = 0; i < base.length; i++) out[i] = base[i] + randn() * sigma;
  return out;
}
