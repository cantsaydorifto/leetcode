function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let c of coins) {
      if (i - c >= 0) {
        dp[i] = Math.min(1 + dp[i - c], dp[i]);
      }
    }
  }
  return dp[dp.length - 1] === Number.MAX_SAFE_INTEGER ? -1 : dp[dp.length - 1];
}
