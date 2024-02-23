export function findJudge(n: number, trust: number[][]): number {
  const trustsMap = new Map<number, number>();
  const trustedByMap = new Map<number, number>();
  for (let i = 1; i <= n; i++) {
    trustsMap.set(i, 0);
    trustedByMap.set(i, 0);
  }
  for (const [el, trusts] of trust) {
    trustsMap.set(el, (trustsMap.get(el) || 0) + 1);
    trustedByMap.set(trusts, (trustedByMap.get(trusts) || 0) + 1);
  }
  let judge = -1;
  console.log(trustedByMap, trustsMap);
  for (let i = 1; i <= n; i++) {
    if (trustedByMap.get(i)! === n - 1 && trustsMap.get(i)! === 0) judge = i;
  }
  return judge;
}
