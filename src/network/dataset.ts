export interface Point { x: number; y: number; label: number; }

function withNoise(x: number, y: number, label: number, noise: number): Point {
  return {
    x: x + (Math.random() - 0.5) * noise,
    y: y + (Math.random() - 0.5) * noise,
    label,
  };
}

export function generateCircle(n = 200, noise = 0.5): Point[] {
  const points: Point[] = [];
  const radius = 5;
  for (let i = 0; i < n / 2; i++) {
    let r = Math.random() * radius * 0.5;
    let a = Math.random() * 2 * Math.PI;
    points.push(withNoise(r * Math.cos(a), r * Math.sin(a), 1, noise));
    r = radius * 0.7 + Math.random() * radius * 0.3;
    a = Math.random() * 2 * Math.PI;
    points.push(withNoise(r * Math.cos(a), r * Math.sin(a), 0, noise));
  }
  return points;
}

export function generateXOR(n = 200, noise = 0.5): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < n; i++) {
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const label = (x * y >= 0) ? 1 : 0;
    points.push(withNoise(x, y, label, noise));
  }
  return points;
}

export function generateGaussian(n = 200, noise = 0.5): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < n / 2; i++) {
    points.push(withNoise(2 + Math.random() * 2, 2 + Math.random() * 2, 1, noise));
    points.push(withNoise(-2 - Math.random() * 2, -2 - Math.random() * 2, 0, noise));
  }
  return points;
}

export function generateSpiral(n = 500, noise = 0.5): Point[] {
  const points: Point[] = [];
  const half = n / 2;
  const genArm = (deltaT: number, label: number) => {
    for (let i = 0; i < half; i++) {
      const r = (i / half) * 5;
      const t = 3.0 * (i / half) * 2 * Math.PI + deltaT;
      // scale noise by radius so inner points aren't over-noised
      const nx = (Math.random() - 0.5) * noise;
      const ny = (Math.random() - 0.5) * noise;
      points.push({
        x: r * Math.sin(t) + nx,
        y: r * Math.cos(t) + ny,
        label,
      });
    }
  };
  genArm(0, 1);
  genArm(Math.PI, 0);
  return points;
}

export function generateData(type: string, n: number, noise: number): Point[] {
  switch (type) {
    case 'xor': return generateXOR(n, noise);
    case 'gaussian': return generateGaussian(n, noise);
    case 'spiral': return generateSpiral(n, noise);
    default: return generateCircle(n, noise);
  }
}

// Split into train/test
export function splitData(data: Point[], trainRatio: number) {
  const shuffled = [...data].sort(() => Math.random() - 0.5);
  const cut = Math.floor(shuffled.length * trainRatio);
  return { train: shuffled.slice(0, cut), test: shuffled.slice(cut) };
}