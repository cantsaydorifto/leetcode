export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  const res: string[][] = [];
  for (const str of strs) {
    const count = new Array(26).fill(0);
    for (const i of str) {
      count[i.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    if (map.has(count.toString())) {
      map.set(count.toString(), [...map.get(count.toString())!, str]);
    } else {
      map.set(count.toString(), [str]);
    }
  }
  for (const [key, value] of map) {
    res.push(value);
  }
  return res;
}
