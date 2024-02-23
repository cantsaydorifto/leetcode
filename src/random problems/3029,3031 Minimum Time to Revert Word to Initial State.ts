export function minimumTimeToInitialState(word: string, k: number): number {
  const z = zfunction(word);
  for (let i = k; i < z.length; i += k) {
    if (z[i] === z.length - i) {
      return i / k;
    }
  }
  return Math.ceil(word.length / k);
}

function zfunction(s: string) {
  const z = Array(s.length).fill(0);
  let [l, r] = [0, 0];
  for (let i = 1; i < s.length; i++) {
    if (i < r) {
      z[i] = Math.min(r - i, z[i - l]);
    }
    while (i + z[i] < s.length && s[z[i]] == s[i + z[i]]) {
      z[i]++;
    }
    if (i + z[i] > r) {
      l = i;
      r = i + z[i];
    }
  }
  return z;
}
