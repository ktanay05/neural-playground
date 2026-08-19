import * as d3 from 'd3';
import type { SimPoint } from './simulator';

export function drawResponse(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  data: SimPoint[],
  setpoint: number
) {
  ctx.clearRect(0, 0, width, height);
  if (data.length === 0) return;

  const pad = 40;
  const tMax = data[data.length - 1].t;

  // Y range: include setpoint + response, with margin
  const xs = data.map(d => d.xTrue);
  const yMin = Math.min(0, d3.min(xs)!, setpoint) * 1.1 - 0.05;
  const yMax = Math.max(setpoint, d3.max(xs)!) * 1.2 + 0.05;

  const xScale = d3.scaleLinear().domain([0, tMax]).range([pad, width - pad]);
  const yScale = d3.scaleLinear().domain([yMin, yMax]).range([height - pad, pad]);

  // --- Axes ---
  ctx.strokeStyle = '#ccc';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad, pad); ctx.lineTo(pad, height - pad); ctx.lineTo(width - pad, height - pad);
  ctx.stroke();

  // --- Setpoint line ---
  ctx.strokeStyle = '#e8743b';
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(pad, yScale(setpoint));
  ctx.lineTo(width - pad, yScale(setpoint));
  ctx.stroke();
  ctx.setLineDash([]);

  // --- Noisy measurement (faint) ---
  ctx.strokeStyle = 'rgba(120,120,120,0.35)';
  ctx.beginPath();
  data.forEach((d, i) => {
    const px = xScale(d.t), py = yScale(d.x);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  });
  ctx.stroke();

  // --- True response (bold blue) ---
  ctx.strokeStyle = '#3a5fcd';
  ctx.lineWidth = 2;
  ctx.beginPath();
  data.forEach((d, i) => {
    const px = xScale(d.t), py = yScale(d.xTrue);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  });
  ctx.stroke();

  // --- Labels ---
  ctx.fillStyle = '#333';
  ctx.font = '12px sans-serif';
  ctx.fillText('position', pad + 4, pad - 8);
  ctx.fillText('time (s)', width - pad - 40, height - pad + 24);
  ctx.fillStyle = '#e8743b';
  ctx.fillText(`setpoint = ${setpoint}`, width - pad - 90, yScale(setpoint) - 6);
}
