export function shipWithinDays(weights: number[], days: number): number {
  let l = Math.max(...weights);
  let r = weights.reduce((sum, el) => el + sum, 0);
  while (l < r) {
    let mid = Math.floor(l + (r - l) / 2);
    if (feasible(weights, mid, days)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}

function feasible(nums: number[], capacity: number, days: number): boolean {
  let totalWeight = 0;
  let cnt = 0;
  for (let i of nums) {
    totalWeight += i;
    if (totalWeight > capacity) {
      cnt++;
      totalWeight = i;
    }
  }
  return cnt + 1 <= days;
}
