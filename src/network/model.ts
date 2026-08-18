import * as tf from '@tensorflow/tfjs';

export interface NetConfig {
  hiddenLayers: number[];
  activation: 'tanh' | 'relu' | 'sigmoid' | 'linear';
  learningRate: number;
  regularization: 'none' | 'l1' | 'l2';
  regRate: number;
  problemType: 'classification' | 'regression';
}

export class PlaygroundModel {
  model!: tf.Sequential;
  epoch = 0;

  build(cfg: NetConfig, inputDim: number) {
    const regularizer =
      cfg.regularization === 'l1' ? tf.regularizers.l1({ l1: cfg.regRate }) :
      cfg.regularization === 'l2' ? tf.regularizers.l2({ l2: cfg.regRate }) :
      undefined;

    if (this.model) this.model.dispose();
    this.model = tf.sequential();

    cfg.hiddenLayers.forEach((units, i) => {
      this.model.add(tf.layers.dense({
        units,
        activation: cfg.activation,
        inputShape: i === 0 ? [inputDim] : undefined,
        kernelRegularizer: regularizer,
      }));
    });

    this.model.add(tf.layers.dense({
      units: 1,
      activation: cfg.problemType === 'classification' ? 'sigmoid' : undefined,
    }));

    this.model.compile({
      optimizer: tf.train.sgd(cfg.learningRate),
      loss: cfg.problemType === 'classification'
        ? 'binaryCrossentropy' : 'meanSquaredError',
    });
    this.epoch = 0;
  }

  async trainStep(xs: tf.Tensor, ys: tf.Tensor, batchSize: number): Promise<number> {
    const h = await this.model.fit(xs, ys, { epochs: 1, batchSize, verbose: 0 });
    this.epoch++;
    return h.history.loss[0] as number;
  }

  evaluate(xs: tf.Tensor, ys: tf.Tensor): number {
    const result = this.model.evaluate(xs, ys) as tf.Scalar;
    const val = result.dataSync()[0];
    result.dispose();
    return val;
  }

  getWeights(): number[][][] {
    return this.model.layers.map(l => {
      const w = l.getWeights()[0];
      return w ? (w.arraySync() as number[][]) : [];
    });
  }
}