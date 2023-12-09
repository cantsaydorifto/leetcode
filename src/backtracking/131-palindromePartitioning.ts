export function partition(s: string): string[][] {
  let res: string[][] = [];
  backtrack([], s, res);
  return res;
}

function backtrack(str: string[], s: string, res: string[][]) {
  if (s.length === 0) {
    res.push([...str]);
    return;
  }
  for (let i = 1; i <= s.length; i++) {
    if (!isPalindrome(s.slice(0, i))) continue;
    str.push(s.slice(0, i));
    backtrack(str, s.slice(i), res);
    str.pop();
  }
}

function isPalindrome(s: string): boolean {
  let [left, right] = [0, s.length - 1];
  while (left <= right) {
    if (s[left] != s[right]) return false;
    left++;
    right--;
  }
  return true;
}
