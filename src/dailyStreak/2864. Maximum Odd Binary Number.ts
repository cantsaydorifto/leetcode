export function maximumOddBinaryNumber(s: string): string {
  let [oneCount, j] = [0, 0];
  const res: number[] = Array(s.length).fill(0);
  for (const el of s) el === "1" && oneCount++;
  if (oneCount-- > 0) res[res.length - 1] = 1;
  while (oneCount-- > 0) res[j++] = 1;
  return res.join("");
}
