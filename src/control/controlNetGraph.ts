import * as d3 from 'd3';

export const CP_NET_WIDTH = 340;
export const CP_NET_MARGIN = 40;

// Draws a simple node-link diagram for [5 inputs] -> hidden -> [3 outputs]
export function renderControlNet(
  svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>,
  hiddenLayers: number[]
) {
  svg.selectAll('*').remove();
  const height = +svg.attr('height');

  const layers = [5, ...hiddenLayers, 3];
  const totalLayers = layers.length;
  const layerGap = (CP_NET_WIDTH - 2 * CP_NET_MARGIN) / (totalLayers - 1);

  const nodePos: { x: number; y: number }[][] = [];

  layers.forEach((count, li) => {
    const x = li * layerGap + CP_NET_MARGIN;
    const gap = height / (count + 1);
    const col: { x: number; y: number }[] = [];
    for (let n = 0; n < count; n++) col.push({ x, y: gap * (n + 1) });
    nodePos.push(col);
  });

  // Edges
  for (let li = 0; li < nodePos.length - 1; li++) {
    for (const a of nodePos[li]) {
      for (const b of nodePos[li + 1]) {
        svg.append('line')
          .attr('x1', a.x).attr('y1', a.y)
          .attr('x2', b.x).attr('y2', b.y)
          .attr('stroke', '#ccc').attr('stroke-width', 0.5);
      }
    }
  }

  // Nodes
  const labels = ['m', 'c', 'k', 'aggr', 'rob'];
  const outLabels = ['Kp', 'Ki', 'Kd'];
  nodePos.forEach((col, li) => {
    col.forEach((p, ni) => {
      const isInput = li === 0;
      const isOutput = li === nodePos.length - 1;
      svg.append('circle')
        .attr('cx', p.x).attr('cy', p.y).attr('r', 10)
        .attr('fill', isInput ? '#9bb8ff' : isOutput ? '#a8e6b0' : '#f0f0f0')
        .attr('stroke', '#666').attr('stroke-width', 1);
      if (isInput) {
        svg.append('text').attr('x', p.x - 16).attr('y', p.y + 4)
          .attr('text-anchor', 'end').attr('font-size', 11).text(labels[ni]);
      }
      if (isOutput) {
        svg.append('text').attr('x', p.x + 16).attr('y', p.y + 4)
          .attr('font-size', 11).attr('font-weight', 'bold').text(outLabels[ni]);
      }
    });
  });
}
