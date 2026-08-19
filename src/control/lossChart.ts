export function drawCostChart(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  history: number[]
) {
  ctx.clearRect(0, 0, width, height);
  if (history.length < 2) return;

  const pad = 30;
  const max = Math.max(...history);
  const min = Math.min(...history);
  const range = max - min || 1;

  // Axes
  ctx.strokeStyle = '#ccc';
  ctx.beginPath();
  ctx.moveTo(pad, 5); ctx.lineTo(pad, height - pad); ctx.lineTo(width - 5, height - pad);
  ctx.stroke();

  // Curve
  ctx.strokeStyle = '#3a5fcd';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  history.forEach((v, i) => {
    const x = pad + (i / (history.length - 1)) * (width - pad - 5);
    const y = 5 + (1 - (v - min) / range) * (height - pad - 5);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.fillStyle = '#333';
  ctx.font = '11px sans-serif';
  ctx.fillText('Best J', pad + 2, 14);
  ctx.fillText('generations', width - 70, height - pad + 18);
}
