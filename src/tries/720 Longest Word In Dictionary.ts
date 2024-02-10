export function longestWord(words: string[]): string {
  const wordSet = new Set(words);
  const validStrs = new Set<string>();
  words.sort();
  for (let i of words) {
    if (i.length === 1) {
      validStrs.add(i);
      continue;
    }
    if (
      wordSet.has(i.substring(0, i.length - 1)) &&
      validStrs.has(i.substring(0, i.length - 1))
    ) {
      validStrs.add(i);
    }
  }
  let answer = "";
  for (let i of validStrs) {
    if (i.length > answer.length) answer = i;
    else if (i < answer) answer = i;
  }
  return answer;
}
