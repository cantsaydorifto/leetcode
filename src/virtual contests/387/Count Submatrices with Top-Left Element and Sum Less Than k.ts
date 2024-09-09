export function countSubmatrices(grid: number[][], k: number): number {
  if (k < grid[0][0]) return 0;
  let cnt = 0;
  for (let i = 1; i < grid[0].length; i++) {
    grid[0][i] += grid[0][i - 1];
    if (grid[0][i] <= k) cnt++;
  }
  for (let i = 1; i < grid.length; i++) {
    grid[i][0] += grid[i - 1][0];
    if (grid[i][0] <= k) cnt++;
  }
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      grid[i][j] += grid[i - 1][j] + grid[i][j - 1] - grid[i - 1][j - 1];
      if (grid[i][j] <= k) cnt++;
    }
  }
  return cnt + 1;
}
