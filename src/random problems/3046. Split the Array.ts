function isPossibleToSplit(nums: number[]): boolean {
  const elCnt = new Map<number, number>();
  for (const i of nums) {
    const cnt = elCnt.get(i) || 0;
    if (cnt >= 2) {
      return false;
    }
    elCnt.set(i, cnt + 1);
  }
  return true;
}
