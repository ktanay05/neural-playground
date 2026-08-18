export interface FeatureDef {
  key: string;
  label: string;
  fn: (x: number, y: number) => number;
  enabled: boolean;
}

export const FEATURES: FeatureDef[] = [
  { key: 'x1',    label: 'X₁',      fn: (x) => x,                enabled: true },
  { key: 'x2',    label: 'X₂',      fn: (_x, y) => y,            enabled: true },
  { key: 'x1sq',  label: 'X₁²',     fn: (x) => x * x,            enabled: false },
  { key: 'x2sq',  label: 'X₂²',     fn: (_x, y) => y * y,        enabled: false },
  { key: 'x1x2',  label: 'X₁X₂',    fn: (x, y) => x * y,         enabled: false },
  { key: 'sinx1', label: 'sin(X₁)', fn: (x) => Math.sin(x),      enabled: false },
  { key: 'sinx2', label: 'sin(X₂)', fn: (_x, y) => Math.sin(y),  enabled: false },
];

export function activeFeatures(): FeatureDef[] {
  return FEATURES.filter(f => f.enabled);
}

export function transform(x: number, y: number): number[] {
  return activeFeatures().map(f => f.fn(x, y));
}
