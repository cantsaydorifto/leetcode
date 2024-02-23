export function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) return false;
  hand.sort((a, b) => a - b);
  const map = new Map<number, number>();
  for (const el of hand) {
    const val = map.get(el) || 0;
    map.set(el, val + 1);
  }
  while (map.size !== 0) {
    const res = map.keys().next();
    for (let i = 0; i < groupSize; i++) {
      let cnt = map.get(res.value + i);
      if (!cnt || cnt === 0) return false;
      cnt = cnt - 1;
      map.set(res.value + i, cnt);
      if (cnt < 1) map.delete(res.value + i);
    }
  }
  return true;
}
