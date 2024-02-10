export function minEatingSpeed(piles: number[], h: number): number {
  let l = 1;
  let r = Math.max(...piles);
  while (l < r) {
    let mid = Math.floor(l + (r - l) / 2);
    if (feasible(piles, mid, h)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}

function feasible(nums: number[], perHourSpeed: number, hours: number) {
  let reqHours = 0;
  for (let i of nums) {
    reqHours += Math.ceil(i / perHourSpeed);
  }
  return reqHours <= hours;
}
