function binarySearch(nums: number[], target: number): number {
  let [l, r] = [0, nums.length];
  while (l < r) {
    let mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] < target) l = mid + 1;
    else r = mid;
  }
  return nums[l] === target ? l : -1;
}
