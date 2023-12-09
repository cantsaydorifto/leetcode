const MOD = 1e9 + 7;

export function numRollsToTarget(n: number, k: number, target: number): number {
  const memo = new Array(target + 1);
  for (let i = 0; i < target + 1; i++) {
    memo[i] = new Array(n + 1).fill(-1);
  }
  memo[0][0] = 1;
  return dfs(n, k, target, memo);
}

function dfs(n: number, k: number, target: number, memo: number[][]) {
  if (n === 0 && target === 0) return 1;
  if (n === 0 || target <= 0) return 0;
  if (memo[target][n] !== -1) return memo[target][n];
  let sum = 0;
  for (let i = 1; i <= k; i++) {
    sum += dfs(n - 1, k, target - i, memo);
    sum %= MOD;
  }
  memo[target][n] = sum;
  return sum;
}
