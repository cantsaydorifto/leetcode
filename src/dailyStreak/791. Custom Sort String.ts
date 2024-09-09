export function customSortString(order: string, s: string): string {
  const charMap = new Map<string, number>();
  for (let i = 0; i < order.length; i++) {
    charMap.set(order[i], i);
  }
  let str = "";
  let strNotInOrder = "";
  for (const i of s) {
    if (charMap.has(i)) str += i;
    else strNotInOrder += i;
  }
  const resStr = str.split("");
  resStr.sort((a, b) => {
    if (!charMap.has(a) || !charMap.has(b)) return 1;
    return charMap.get(a)! - charMap.get(b)!;
  });
  return resStr.join("") + strNotInOrder;
}
