const f = (n: number, cost: number[], arr: number[]): number => {
  if (n === 0) return cost[0] + 0;
  if (n === 1) return cost[1] + 0;
  if (arr[n] === -1) {
    arr[n] = Math.min(f(n - 1, cost, arr), f(n - 2, cost, arr)) + cost[n];
  }
  return arr[n];
};

// const f = (n: number, cost: number[]): number => {
//   if (n === cost.length - 1) {
//     return Math.min(cost[n - 2], cost[n - 1]);
//   }
//   if (n === cost.length - 2) {
//     return Math.min(cost[n - 2], cost[n - 1]) + f(n + 1, cost);
//   }
//   return Math.min(f(n + 1, cost), f(n + 2, cost)) + cost[n];
// };

function minCostClimbingStairs(cost: number[]): number {
  const arr = new Array<number>(cost.length).fill(-1);
  arr[0] = cost[0] + 0;
  arr[1] = cost[1] + 0;
  let res = 0;
  res = Math.min(f(cost.length - 1, cost, arr), f(cost.length - 2, cost, arr));
  return res;
}
