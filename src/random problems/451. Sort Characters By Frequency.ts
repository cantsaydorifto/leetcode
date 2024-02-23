export function frequencySort(s: string): string {
  const [map, cntKeyMap] = [
    new Map<string, number>(),
    new Map<number, string>(),
  ];
  let resStr = "";
  for (const el of s) {
    map.set(el, (map.get(el) || 0) + 1);
  }
  for (const [el, cnt] of map) {
    cntKeyMap.set(cnt, (cntKeyMap.get(cnt) || "") + el.repeat(cnt));
  }
  for (let i = s.length; i >= 0; i--) {
    resStr += cntKeyMap.get(i) || "";
  }
  return resStr;
}

function frequencySortAlt(s: string): string {
  const map = new Map<string, number>();
  let resStr = "";
  for (const el of s) {
    map.set(el, (map.get(el) || 0) + 1);
  }
  const sortedArray = [...map.entries()].sort((a, b) =>
    a[1] === b[1] ? a[0].charCodeAt(0) - b[0].charCodeAt(0) : b[1] - a[1]
  );
  for (const el of sortedArray) {
    resStr += el[0].repeat(el[1]);
  }
  return resStr;
}
