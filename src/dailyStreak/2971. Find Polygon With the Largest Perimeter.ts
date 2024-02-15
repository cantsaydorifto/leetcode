export function largestPerimeter(nums: number[]): number {
  let largestPerimeter = -1;
  const cumulativeSum = getCumulativeSum(nums);
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] < cumulativeSum[i - 1]) {
      largestPerimeter = cumulativeSum[i];
    }
  }
  return largestPerimeter;
}

function getCumulativeSum(nums: number[]) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  return nums.map((el) => {
    sum += el;
    return sum;
  });
}
