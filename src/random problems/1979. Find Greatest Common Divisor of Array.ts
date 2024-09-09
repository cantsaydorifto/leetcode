function findGCD(nums: number[]): number {
  let [maxEl, minEl] = [-1, 1001];
  for (const i of nums) {
    if (i < minEl) minEl = i;
    if (i > maxEl) maxEl = i;
  }
  return gcd(maxEl, minEl);
}

function gcd(a: number, b: number): number {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}
