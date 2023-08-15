function knapsack(
  n: number,
  W: number,
  wt: number[],
  val: number[],
  dp: number[][]
): number {
  if (n === 0 || W === 0) {
    return 0;
  }
  if (dp[n][W] !== -1) return dp[n][W];
  if (wt[n] <= W) {
    dp[n][W] = Math.max(
      knapsack(n - 1, W, wt, val, dp),
      val[n] + knapsack(n - 1, W - wt[n], wt, val, dp)
    );
  } else {
    dp[n][W] = knapsack(n - 1, W, wt, val, dp);
  }
  return dp[n][W];
}

export function main() {
  const wt = [
    6, 89, 12, 23, 22, 72, 2, 25, 47, 40, 51, 93, 15, 49, 85, 43, 88, 75, 96,
    72, 72, 26, 90, 46, 17, 69, 74, 73, 7, 25, 35, 27, 7, 19, 77, 53, 11, 21,
    20, 32, 39, 45, 24, 19, 54, 94, 85, 9, 38, 19, 40, 37, 40, 53, 62, 32, 47,
    20, 19, 51, 90, 5, 89, 50, 68, 63, 59, 8, 64, 16, 24, 51, 13, 37, 76, 63,
    68, 32, 12, 18, 12, 60, 45, 39, 64,
  ];
  const val = [
    51, 94, 66, 55, 81, 99, 79, 12, 14, 32, 36, 88, 65, 79, 62, 37, 47, 13, 93,
    77, 100, 26, 44, 66, 73, 71, 74, 27, 6, 43, 16, 50, 7, 65, 3, 58, 7, 90, 99,
    60, 84, 54, 68, 45, 28, 5, 43, 77, 47, 68, 9, 83, 66, 20, 84, 67, 4, 70, 90,
    80, 11, 72, 54, 63, 9, 91, 43, 44, 36, 89, 60, 92, 70, 13, 66, 43, 45, 20,
    32, 22, 61, 94, 25, 79, 27,
  ];
  const W = 50;
  const dp = new Array(wt.length + 1);
  for (let i = 0; i < wt.length + 1; i++) {
    dp[i] = new Array(W + 1).fill(-1);
  }
  return knapsack(wt.length - 1, W, wt, val, dp);
}
