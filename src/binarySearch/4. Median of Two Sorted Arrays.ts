export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  return median([...nums1, ...nums2].sort((a, b) => a - b));
}

function median(nums: number[]) {
  const flooredHalf = Math.floor(nums.length / 2);
  if (nums.length % 2 == 0) {
    return (nums[flooredHalf] + nums[flooredHalf - 1]) / 2;
  }
  return nums[flooredHalf];
}
