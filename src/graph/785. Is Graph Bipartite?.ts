export function isBipartite(graph: number[][]): boolean {
  const q: number[] = [];
  const colors = new Array(graph.length).fill(0);
  for (let i = 0; i < graph.length; i++) {
    if (colors[i] !== 0) continue;
    q.unshift(i);
    while (q.length > 0) {
      const element = q.pop()!;
      let nodeColor: number | null = null;
      for (const neighbour of graph[element]) {
        if (colors[neighbour] === 0) {
          q.unshift(neighbour);
          continue;
        }
        if (!nodeColor) {
          nodeColor = colors[neighbour];
          continue;
        }
        if (nodeColor !== colors[neighbour]) return false;
      }
      colors[element] = nodeColor ? -1 * nodeColor : 1;
    }
  }
  return true;
}
