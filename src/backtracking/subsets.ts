export function subsets(nums: number[]): number[][] {
  let res: number[][] = [];
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
    arr.push(nums[i]);
    backtrack(i + 1, arr, res, nums);
    arr.pop();
  }
}
