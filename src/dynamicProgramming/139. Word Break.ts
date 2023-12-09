export function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict);
  const memo = new Map<string, boolean>();
  return dfs(s, wordSet, memo);
}

function dfs(
  s: string,
  wordSet: Set<string>,
  memo: Map<string, boolean>
): boolean {
  if (memo.has(s)) return memo.get(s)!;
  if (s.length === 0) {
    memo.set(s, true);
    return true;
  }
  for (let i = 1; i <= s.length; i++) {
    if (wordSet.has(s.substring(0, i)) && dfs(s.substring(i), wordSet, memo)) {
      memo.set(s, true);
      return true;
    }
  }
  memo.set(s, false);
  return false;
}
