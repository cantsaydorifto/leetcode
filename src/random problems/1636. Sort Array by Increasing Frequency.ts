function frequencySort(nums: number[]): number[] {
  const map = new Map<number, number>();
  for (const el of nums) {
    map.set(el, (map.get(el) || 0) + 1);
  }
  const res: number[] = [];
  [...map.entries()]
    .sort((a, b) => (a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]))
    .forEach((el) => {
      res.push(...Array(el[1]).fill(el[0]));
    });
  return res;
}
