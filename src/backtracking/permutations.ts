export function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  backtrack([], res, nums);
  return res;
}

function backtrack(arr: number[], res: number[][], nums: number[]) {
  if (arr.length === nums.length) res.push([...arr]);
  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) continue; //Or Use A Map
    arr.push(nums[i]);
    backtrack(arr, res, nums);
    arr.pop();
  }
}
