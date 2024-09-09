export class StreamChecker {
  words: string[];
  lps: number[];
  stream: string;
  constructor(words: string[]) {
    this.words = [...words];
    this.lps = [];
    this.stream = "";
  }

  query(letter: string): boolean {
    if (this.stream.length === 0) {
      this.stream = letter;
      this.lps = [0];
      return true;
    }
    this.stream += letter;
    constructLPS(
      this.stream,
      this.lps,
      this.stream.length - 1,
      this.lps[this.stream.length - 2]
    );
    console.log(this.lps);
    return true;
  }
}

function constructLPS(str: string, lps: number[], i: number, j: number) {
  lps.push(0);
  while (i < str.length) {
    if (str[i] === str[j]) {
      lps[i] = j + 1;
      i++;
      j++;
      continue;
    }
    if (j === 0) {
      lps[i] = 0;
      i++;
      continue;
    }
    j = lps[j - 1];
  }
}
