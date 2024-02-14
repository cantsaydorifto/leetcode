export function minimumTotal(triangle: number[][]): number {
  return dfs(
    0,
    0,
    triangle,
    new Array(triangle.length).fill([]).map(() => new Array(triangle.length))
  );
}

function dfs(
  depth: number,
  selectedIndex: number,
  triangle: number[][],
  memo: number[][]
): number {
  if (depth >= triangle.length) return 0;
  if (memo[depth][selectedIndex] === undefined) {
    memo[depth][selectedIndex] =
      triangle[depth][selectedIndex] +
      Math.min(
        dfs(depth + 1, selectedIndex, triangle, memo),
        dfs(depth + 1, selectedIndex + 1, triangle, memo)
      );
  }
  return memo[depth][selectedIndex];
}
