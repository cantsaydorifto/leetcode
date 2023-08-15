function reverse(l: number, r: number, nums: number[]) {
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
}

export function rotate(nums: number[], k: number): number[] {
  k = k % nums.length;
  reverse(0, nums.length - k - 1, nums);
  reverse(nums.length - k, nums.length - 1, nums);
  reverse(0, nums.length - 1, nums);
  return nums;
}
