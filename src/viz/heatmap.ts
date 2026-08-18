import * as tf from '@tensorflow/tfjs';
import { PlaygroundModel } from '../network/model';
import type { Point } from '../network/dataset';
import { transform } from '../network/features';

const RANGE = 6;

function valueToColor(v: number): string {
  const t = Math.max(0, Math.min(1, v));
  // 0 -> orange, 0.5 -> white (separation), 1 -> blue
  let r: number, g: number, b: number;
  if (t < 0.5) {
    const k = t / 0.5;
    r = 245 + (255 - 245) * k;
    g = 166 + (255 - 166) * k;
    b = 35 + (255 - 35) * k;
  } else {
    const k = (t - 0.5) / 0.5;
    r = 255 + (43 - 255) * k;
    g = 255 + (131 - 255) * k;
    b = 255 + (186 - 255) * k;
  }
  return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
}

export function drawHeatmap(
  ctx: CanvasRenderingContext2D,
  model: PlaygroundModel,
  size: number,
  train: Point[],
  test: Point[],
  showTest: boolean
) {
  const resolution = 100;
  const cell = size / resolution;
  const grid: number[][] = [];

  for (let i = 0; i < resolution; i++) {
    for (let j = 0; j < resolution; j++) {
      const x = (i / resolution) * 2 * RANGE - RANGE;
      const y = RANGE - (j / resolution) * 2 * RANGE;
      grid.push(transform(x, y));
    }
  }

  const input = tf.tensor2d(grid);
  const preds = model.model.predict(input) as tf.Tensor;
  const values = preds.dataSync();
  input.dispose();
  preds.dispose();

  let idx = 0;
  for (let i = 0; i < resolution; i++) {
    for (let j = 0; j < resolution; j++) {
      ctx.fillStyle = valueToColor(values[idx++]);
      ctx.fillRect(i * cell, j * cell, cell + 1, cell + 1);
    }
  }

  const plot = (pts: Point[], stroke: string) => {
    pts.forEach(p => {
      const px = ((p.x + RANGE) / (2 * RANGE)) * size;
      const py = ((RANGE - p.y) / (2 * RANGE)) * size;
      ctx.beginPath();
      ctx.arc(px, py, 3.5, 0, 2 * Math.PI);
      ctx.fillStyle = p.label === 1 ? '#2b83ba' : '#f5a623';
      ctx.fill();
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  };

  plot(train, '#fff');
  if (showTest) plot(test, '#000');

  // Axes
  ctx.strokeStyle = 'rgba(0,0,0,0.3)';
  ctx.lineWidth = 1;
  const mid = size / 2;
  ctx.beginPath(); ctx.moveTo(mid, 0); ctx.lineTo(mid, size); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(size, mid); ctx.stroke();

  ctx.fillStyle = '#555';
  ctx.font = '11px sans-serif';
  ctx.fillText('-6', 2, mid - 3);
  ctx.fillText('6', size - 14, mid - 3);
  ctx.fillText('6', mid + 3, 12);
  ctx.fillText('-6', mid + 3, size - 4);
}

// Color scale legend (-1 to 1)
export function drawColorScale(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!;
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const barH = 15;
  const grad = ctx.createLinearGradient(0, 0, w, 0);

  // These MUST match valueToColor() endpoints exactly
  grad.addColorStop(0,   valueToColor(0));   // left  = orange (class 0 / negative)
  grad.addColorStop(0.5, 'rgb(255,255,255)'); // middle = pure WHITE (separation)
  grad.addColorStop(1,   valueToColor(1));   // right = blue (class 1 / positive)

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, barH);

  // Numeric labels -1 to 1
  ctx.fillStyle = '#555';
  ctx.font = '11px sans-serif';
  ctx.fillText('-1', 0, h - 2);
  ctx.fillText('0',  w / 2 - 3, h - 2);
  ctx.fillText('1',  w - 8, h - 2);
}