//TOP DOWN RECURSIVE FUNCTION

// function f(n: number, nums: number[], memo: number[]): number {
//   if (n < 0) {
//     return 0;
//   }
//   console.log(n);
//   if (memo[n] < 0)
//     memo[n] = Math.max(f(n - 1, nums, memo), f(n - 2, nums, memo) + nums[n]);
//   return memo[n];
// }

// BOTTOM UP ITERATIVE

// export function rob(nums: number[]): number {
//   const memo = new Array<number>(nums.length + 1).fill(-1);
//   memo[0] = 0;
//   memo[1] = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i]);
//   }
//   return memo[memo.length - 1];
// }

//FURTHER OPTIMIZED USING ONLY 2 VARIABLES

export function rob(nums: number[]): number {
  let mem1 = 0;
  let mem2 = nums[0];

  for (let i = 1; i < nums.length; i++) {
    [mem2, mem1] = [Math.max(mem2, mem1 + nums[i]), mem2];
  }
  return mem2;
}
