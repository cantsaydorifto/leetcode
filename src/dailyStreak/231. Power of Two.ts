export function isPowerOfTwoFirst(n: number): boolean {
  return new Set([
    1n,
    2n,
    4n,
    8n,
    16n,
    32n,
    64n,
    128n,
    256n,
    512n,
    1024n,
    2048n,
    4096n,
    8192n,
    16384n,
    32768n,
    65536n,
    131072n,
    262144n,
    524288n,
    1048576n,
    2097152n,
    4194304n,
    8388608n,
    16777216n,
    33554432n,
    67108864n,
    134217728n,
    268435456n,
    536870912n,
    1073741824n,
  ]).has(BigInt(n));
}

function isPowerOfTwo(n: number): boolean {
  return Math.log2(n) % 1 === 0;
}
