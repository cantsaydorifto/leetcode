export function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const [map, freqArr] = getCounterMap(arr);
  let res = map.size;
  for (let i = 1; i < freqArr.length; i++) {
    if (k / i < freqArr[i]) {
      res -= Math.floor(k / i);
      break;
    }
    [k, res] = [k - freqArr[i] * i, res - freqArr[i]];
  }

  return res;
}

function getCounterMap(arr: number[]): [Map<number, number>, number[]] {
  const map = new Map<number, number>();
  const freqArr = Array<number>(arr.length + 1).fill(0);
  for (const el of arr) {
    map.set(el, (map.get(el) || 0) + 1);
  }
  for (const cnt of map.values()) {
    freqArr[cnt]++;
  }
  return [map, freqArr];
}

function findLeastNumOfUniqueIntsAlt(arr: number[], k: number): number {
  const map = new Map<number, number>();
  for (const el of arr) {
    map.set(el, (map.get(el) || 0) + 1);
  }
  const sortedMap = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
  while (k > 0) {
    const el = sortedMap.keys().next().value;
    const val = sortedMap.get(el)!;
    sortedMap.set(el, val - 1);
    if (val - 1 === 0) {
      sortedMap.delete(el);
    }
    k--;
  }
  return sortedMap.size;
}
