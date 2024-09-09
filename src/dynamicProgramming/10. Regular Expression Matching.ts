function isMatch(s: string, p: string): boolean {
  return dfs(s, p, 0, 0);
}

function dfs(s: string, p: string, i: number, j: number): boolean {
  if (j === p.length && i === s.length) return true;
  if (j >= p.length) return false;
  const isMatchOrDot = (p[j] === "." || s[i] === p[j]) && i < s.length;
  if (j + 1 < p.length && p[j + 1] === "*") {
    const skipPatternCharacter = dfs(s, p, i, j + 2);
    return skipPatternCharacter || (isMatchOrDot && dfs(s, p, i + 1, j));
  }
  if (isMatchOrDot) return dfs(s, p, i + 1, j + 1);
  return false;
}
