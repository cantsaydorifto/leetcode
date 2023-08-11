// function f(nums: number[]): number {
//   if (nums.length === 1) return nums[0];
//   return Math.max(nums[0] * f(nums.slice(1)), f(nums.slice(1)));
// }

export function maxProduct(nums: number[]): number {
  let prefix = 1;
  let suffix = 1;
  let maxVal = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;
    prefix *= nums[i];
    suffix *= nums[nums.length - 1 - i];
    maxVal = Math.max(prefix, suffix, maxVal);
  }
  return maxVal;
}
