import * as d3 from 'd3';
import type { NetConfig } from '../network/model';
import { activeFeatures } from '../network/features';

export const NET_WIDTH = 800;
export const NET_HEIGHT = 450;
export const NET_MARGIN = 60;

export function renderNetwork(
  svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>,
  config: NetConfig,
  weights: number[][][]
) {
  svg.selectAll('*').remove();
  const inputCount = activeFeatures().length;
  const layers = [inputCount, ...config.hiddenLayers, 1];
  const layerGap = (NET_WIDTH - 2 * NET_MARGIN) / (layers.length - 1);

  const positions = layers.map((count, li) =>
    d3.range(count).map(ni => ({
      x: li * layerGap + NET_MARGIN,
      y: (NET_HEIGHT / (count + 1)) * (ni + 1),
    }))
  );

  // Edges
  for (let li = 0; li < layers.length - 1; li++) {
    positions[li].forEach((src, si) => {
      positions[li + 1].forEach((dst, di) => {
        const w = weights[li]?.[si]?.[di] ?? 0;
        svg.append('line')
          .attr('x1', src.x).attr('y1', src.y)
          .attr('x2', dst.x).attr('y2', dst.y)
          .attr('stroke', w > 0 ? '#2b83ba' : '#f5a623')
          .attr('stroke-width', Math.min(Math.abs(w) * 3, 5))
          .attr('opacity', 0.55);
      });
    });
  }

  // Nodes
  positions.flat().forEach(p => {
    svg.append('circle')
      .attr('cx', p.x).attr('cy', p.y).attr('r', 11)
      .attr('fill', '#fff').attr('stroke', '#333').attr('stroke-width', 2);
  });
}
