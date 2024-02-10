export function numEnclaves(grid: number[][]): number {
  const q: number[][] = [];
  let cntZeroes = 0;
  let convertedOnes = 0;

  const rows = grid.length;
  const col = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0) {
        cntZeroes++;
      }
      if (grid[i][j] !== 1) {
        continue;
      }
      if (
        i === 0 ||
        j === 0 ||
        i === grid.length - 1 ||
        j === grid[0].length - 1
      ) {
        convertedOnes += bfs(i, j, q, grid);
      }
    }
  }
  return rows * col - (cntZeroes + convertedOnes);
}

function bfs(i: number, j: number, q: number[][], grid: number[][]) {
  const vectors = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  let cnt = 1;
  q.push([i, j]);
  grid[i][j] = -1;
  while (q.length > 0) {
    const [i, j] = q.shift()!;
    for (const [dc, dr] of vectors) {
      if (
        i + dc >= 0 &&
        i + dc < grid.length &&
        j + dr >= 0 &&
        j + dr < grid[0].length &&
        grid[i + dc][j + dr] !== 0 &&
        grid[i + dc][j + dr] !== -1
      ) {
        cnt++;
        q.push([i + dc, j + dr]);
        grid[i + dc][j + dr] = -1;
      }
    }
  }
  return cnt;
}

// ALT METHOD
function bfsForCountingSquares(
  i: number,
  j: number,
  q: number[][],
  grid: number[][]
) {
  const vectors = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  q.push([i, j]);
  grid[i][j] = 0;
  let isNotEnclave: boolean = false;
  let cnt = 1;
  while (q.length > 0) {
    const [i, j] = q.shift()!;
    for (const [dc, dr] of vectors) {
      if (
        i + dc >= 0 &&
        i + dc < grid.length &&
        j + dr >= 0 &&
        j + dr < grid[0].length &&
        grid[i + dc][j + dr] !== 0
      ) {
        cnt++;
        q.push([i + dc, j + dr]);
        grid[i + dc][j + dr] = 0;
      }
      if (
        i + dc < 0 ||
        i + dc >= grid.length ||
        j + dr < 0 ||
        j + dr >= grid[0].length
      ) {
        isNotEnclave = true;
      }
    }
  }
  return isNotEnclave ? 0 : cnt;
}
