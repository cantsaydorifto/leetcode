function plusOneAlt(digits: number[]): number[] {
  let num = 1n;
  for (let i = 0; i < digits.length; i++) {
    num += BigInt(digits[i]) * 10n ** BigInt(digits.length - i - 1);
  }
  return (num + "").split("").map((el) => Number(el));
}

export function plusOne(digits: number[]): number[] {
  return Array.from(BigInt(digits.join("")) + 1n + "", Number);
}
