export function gcdOfStrings(str1: string, str2: string): string {
  let [largerStr, shorterStr] = [str1, str2].sort(
    (a, b) => b.length - a.length
  );
  let res = "";
  let pattern = shorterStr;
  while (pattern.length > 0) {
    if (checkRepeatingPattern(largerStr, pattern)) {
      if (checkRepeatingPattern(shorterStr, pattern)) {
        res = pattern;
        break;
      }
    }
    pattern = pattern.slice(1);
  }
  return res;
}

function checkRepeatingPattern(str: string, pattern: string): boolean {
  let [i, j] = [0, 0];
  if (pattern === "") return true;
  while (i < str.length) {
    if (j >= pattern.length) {
      j = 0;
    }
    if (str[i] !== pattern[j]) return false;
    i++;
    j++;
  }
  return j === pattern.length;
}
