export function countMaxOrSubsets(nums: number[]) {
  const res: number[] = [];
  backtrack(0, [], res, nums);
  let [max, maxCount] = [Number.MIN_SAFE_INTEGER, 0];
  for (let i = 0; i < res.length; i++) {
    if (max < res[i]) {
      [max, maxCount] = [res[i], 1];
    } else if (max === res[i]) {
      maxCount++;
    }
  }
  return maxCount;
}

function backtrack(idx: number, arr: number[], res: number[], nums: number[]) {
  // console.log(arr, findOr(arr));
  res.push(findOr(arr));
  for (let i = idx; i < nums.length; i++) {
    // if (i > idx && nums[i] === nums[i - 1]) continue;
    arr.push(nums[i]);
    backtrack(i + 1, arr, res, nums);
    arr.pop();
  }
}

function findOr(nums: number[]) {
  let res = 0;
  nums.forEach((el) => (res = el | res));
  return res;
}
