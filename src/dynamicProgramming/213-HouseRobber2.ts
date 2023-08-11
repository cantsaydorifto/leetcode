function f(nums: number[]) {
  let mem0 = 0;
  let mem1 = nums[0];
  for (let i = 1; i < nums.length; i++) {
    [mem1, mem0] = [Math.max(mem1, mem0 + nums[i]), mem1];
  }
  return mem1;
}

export function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  return Math.max(f(nums.slice(1)), f(nums.slice(0, nums.length - 1)));
  //   const leaveFirst = nums.slice(1);
  //   const memo1 = new Array(leaveFirst.length).fill(-1);
  //   const leaveLast = nums.slice(0, nums.length - 1);
  //   const memo2 = new Array(leaveLast.length).fill(-1);
}

// function f(n: number, nums: number[], memo: number[]): number {
//   if (n < 0) {
//     return 0;
//   }
//   if (memo[n] < 0)
//     memo[n] = Math.max(f(n - 1, nums, memo), f(n - 2, nums, memo) + nums[n]);

//   return memo[n];
// }
