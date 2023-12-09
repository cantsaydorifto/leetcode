export function letterCasePermutation(s: string): string[] {
  const res: string[] = [];
  backtrack("", 0, s, res);
  return res;
}

function backtrack(str: string, idx: number, s: string, res: string[]) {
  if (str.length === s.length) {
    res.push(str);
    return;
  }
  if (!isNaN(parseFloat(s[idx]))) {
    str += s[idx];
    backtrack(str, idx + 1, s, res);
    return;
  }
  str += s[idx].toUpperCase();
  backtrack(str, idx + 1, s, res); //we dont use a loop since there are 2 choices always
  str = str.slice(0, str.length - 1);
  str += s[idx].toLowerCase();
  backtrack(str, idx + 1, s, res);
}
