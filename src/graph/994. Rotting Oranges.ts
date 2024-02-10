export function orangesRotting(grid: number[][]): number {
  let min = 0;
  const q: number[][] = [];
  let fresh = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) fresh++;
      if (grid[i][j] === 2) {
        q.push([i, j]);
      }
    }
  }

  const vectors = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  while (q.length > 0 && fresh > 0) {
    const depth = q.length;
    for (let i = 0; i < depth; i++) {
      let [i, j] = q.shift()!;
      for (const [dr, dc] of vectors) {
        if (
          i + dc < grid.length &&
          i + dc >= 0 &&
          j + dr < grid[0].length &&
          j + dr >= 0 &&
          grid[i + dc][j + dr] === 1
        ) {
          grid[i + dc][j + dr] = 2;
          q.push([i + dc, j + dr]);
          fresh -= 1;
        }
      }
    }
    min += 1;
  }
  return fresh > 0 ? -1 : min;
}
