export function strStr(haystack: string, needle: string): number {
  const lps = constructLPS(needle);
  let [i, j] = [0, 0];
  while (i < haystack.length) {
    if (j === needle.length) return i - j;
    if (haystack[i] === needle[j]) {
      i++;
      j++;
      if (j === needle.length) return i - j;
      continue;
    }
    if (j === 0) {
      i++;
      continue;
    }
    j = lps[j - 1];
  }
  return -1;
}

function constructLPS(str: string) {
  const lps = Array(str.length).fill(0);
  let [j, i] = [0, 1];
  while (i < str.length) {
    if (str[i] === str[j]) {
      lps[i] = j + 1;
      i++;
      j++;
      continue;
    }
    if (j === 0) {
      lps[i] = 0;
      i++;
      continue;
    }
    j = lps[j - 1];
  }
  return lps;
}
