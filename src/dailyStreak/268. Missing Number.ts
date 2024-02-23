function missingNumber(nums: number[]): number {
  let sum = 0;
  nums.forEach((el) => (sum += el));
  return (nums.length * (nums.length + 1)) / 2 - sum;
}

export function missingNumberUsingXor(nums: number[]): number {
  let res = nums.length;
  nums.forEach((el, idx) => (res ^= el ^ idx));
  return res;
}
