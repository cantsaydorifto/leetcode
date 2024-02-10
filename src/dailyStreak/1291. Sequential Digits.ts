export function sequentialDigitsActualWay(low: number, high: number): number[] {
  const res = [];
  const str = "123456789";
  let [l, r] = [0, 1];
  while (l < str.length - 1) {
    r = l + 1;
    while (r < str.length) {
      const potentialSequenceNumber = Number(str.slice(l, r + 1));
      if (potentialSequenceNumber >= low && potentialSequenceNumber <= high) {
        res.push(potentialSequenceNumber);
      }
      if (potentialSequenceNumber > high) break;
      r++;
    }
    l++;
  }
  return res.sort((a, b) => a - b);
}

export function sequentialDigits(low: number, high: number): number[] {
  const sequentialDigitsInRange = [
    12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234,
    2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456,
    234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789,
    123456789,
  ];
  const res = [];
  for (const el of sequentialDigitsInRange) {
    if (el < low) continue;
    if (el > high) break;
    res.push(el);
  }
  return res;
}
