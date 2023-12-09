export function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  backtrack([], res, nums, new Array(nums.length).fill(false));
  return res;
}

function backtrack(
  arr: number[],
  res: number[][],
  nums: number[],
  checkElement: boolean[]
) {
  if (arr.length === nums.length) res.push([...arr]);
  for (let i = 0; i < nums.length; i++) {
    if (checkElement[i]) continue;
    if (i > 0 && nums[i] === nums[i - 1] && !checkElement[i - 1]) continue; //Or Use A Map
    checkElement[i] = true;
    arr.push(nums[i]);
    backtrack(arr, res, nums, checkElement);
    arr.pop();
    checkElement[i] = false;
  }
}
