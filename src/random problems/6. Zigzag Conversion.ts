export function convert(s: string, numRows: number): string {
  let [i, cnt, stringToPush, res] = [0, 0, "", ""];
  const strs: string[] = [];
  while (i < s.length) {
    if ((cnt + 1) % numRows === 0) {
      strs.push(stringToPush + s[i]);
      stringToPush = "";
      for (let j = numRows - 2; j > 0; j--) {
        i++;
        stringToPush = (i <= s.length - 1 ? s[i] : "_") + stringToPush;
      }
      strs.push("_" + stringToPush + "_");
      stringToPush = "";
      i++;
      cnt = 0;
      continue;
    }
    stringToPush += s[i];
    i++;
    cnt++;
  }
  if (stringToPush !== "")
    strs.push(stringToPush + "_".repeat(numRows - stringToPush.length));
  for (let i = 0; i < numRows; i++) {
    for (const col of strs) {
      res += col[i] !== "_" ? col[i] : "";
    }
  }
  return res;
}
