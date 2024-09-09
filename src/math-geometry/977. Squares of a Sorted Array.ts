export function sortedSquares(nums: number[]): number[] {
  let [i, k] = [0, 0];
  const res = Array(nums.length);
  while (i < nums.length && nums[i] < 0) i++;
  let j = i - 1;
  while (j >= 0 && i < nums.length) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      res[k] = nums[j] * nums[j];
      k++;
      j--;
      continue;
    }
    res[k] = nums[i] * nums[i];
    k++;
    i++;
  }
  while (j >= 0) {
    res[k] = nums[j] * nums[j];
    j--;
    k++;
  }
  while (i < nums.length) {
    res[k] = nums[i] * nums[i];
    i++;
    k++;
  }
  return res;
}
