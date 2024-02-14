export function rearrangeArray(nums: number[]): number[] {
  const res = new Array(nums.length);
  let [postitiveIndex, negativeIndex] = [0, 1];
  for (const el of nums) {
    if (el >= 0) {
      res[postitiveIndex] = el;
      postitiveIndex += 2;
      continue;
    }
    res[negativeIndex] = el;
    negativeIndex += 2;
  }
  return res;
}

function rearrangeArrayAlt(nums: number[]): number[] {
  const [res, postitiveNums, negativeNums] = declareVariables(nums.length / 2);
  let [cntPositive, cntNegative] = [0, 0];
  for (const el of nums) {
    el >= 0
      ? (postitiveNums[nums.length / 2 - ++cntPositive] = el)
      : (negativeNums[nums.length / 2 - ++cntNegative] = el);
    if (
      postitiveNums[postitiveNums.length - 1] &&
      negativeNums[negativeNums.length - 1]
    ) {
      res.push(...[postitiveNums.pop()!, negativeNums.pop()!]);
    }
  }
  return res;
}

const declareVariables = (len: number) =>
  [[], new Array(len), new Array(len)] as [number[], number[], number[]];
