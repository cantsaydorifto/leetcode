export function rangeBitwiseAnd(left: number, right: number): number {
  if (right - left >= 3) return 0;
  if (right - left === 2) return left & (left + 1) & right;
  return right & left;
}
