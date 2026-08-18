export function drawLossChart(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  trainLoss: number[],
  testLoss: number[]
) {
  ctx.clearRect(0, 0, w, h);

  const pad = 25;
  const plotW = w - pad - 5;
  const plotH = h - pad - 5;

  // Axes
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad, 5);
  ctx.lineTo(pad, h - pad);
  ctx.lineTo(w - 5, h - pad);
  ctx.stroke();

  ctx.fillStyle = '#666';
  ctx.font = '10px sans-serif';
  ctx.fillText('Loss', 2, 12);
  ctx.fillText('Epoch', w - 40, h - 8);

  if (trainLoss.length < 2) return;

  const maxLoss = Math.max(...trainLoss, ...testLoss, 0.001);
  const n = trainLoss.length;

  const line = (data: number[], color: string) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = pad + (i / (n - 1)) * plotW;
      const y = 5 + plotH - (v / maxLoss) * plotH;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
  };

    line(trainLoss, '#3a5fcd');           // train = royal blue
  if (testLoss.length) line(testLoss, '#e8743b'); // test = orange-red

  ctx.fillStyle = '#666';
  ctx.fillText(maxLoss.toFixed(2), 2, 24);
}
