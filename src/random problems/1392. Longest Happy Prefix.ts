export function longestPrefix(s: string): string {
  return s.substring(0, getLongestHappyPrefixLength(s));
}

function getLongestHappyPrefixLength(str: string): number {
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
  return lps[lps.length - 1];
}
