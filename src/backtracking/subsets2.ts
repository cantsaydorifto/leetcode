export function subsetsWithDup(nums: number[]): number[][] {
  let res: number[][] = [];
  nums.sort((a, b) => a - b);
  backtrack(0, [], res, nums);
  return res;
}

function backtrack(
  idx: number,
  arr: number[],
  res: number[][],
  nums: number[]
) {
  res.push([...arr]);
  for (let i = idx; i < nums.length; i++) {
    if (i > idx && nums[i] === nums[i - 1]) continue;
    arr.push(nums[i]);
    backtrack(i + 1, arr, res, nums);
    arr.pop();
  }
}
