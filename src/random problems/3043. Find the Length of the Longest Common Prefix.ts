export function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  let max = 0;
  const trie = new Trie();
  for (const el of arr1) trie.insert(el + "");
  for (let j = 0; j < arr2.length; j++) {
    max = Math.max(trie.startsWith(arr2[j] + ""), max);
  }
  return max;
}

class TrieNode {
  next: Map<string, TrieNode> = new Map();
  isWord: boolean = false;
}

class Trie {
  root: TrieNode = new TrieNode();
  constructor() {}

  insert(word: string): void {
    let cur = this.root;
    for (const ch of word) {
      if (!cur.next.has(ch)) {
        cur.next.set(ch, new TrieNode());
      }
      cur = cur.next.get(ch)!;
    }
    cur.isWord = true;
  }

  search(word: string): boolean {
    let cur = this.root;
    for (const ch of word) {
      if (!cur.next.has(ch)) {
        return false;
      }
      cur = cur.next.get(ch)!;
    }
    return cur.isWord;
  }

  startsWith(prefix: string): number {
    let cnt = 0;
    let cur = this.root;
    for (const ch of prefix) {
      if (!cur.next.has(ch)) {
        return cnt;
      }
      cur = cur.next.get(ch)!;
      cnt++;
    }
    return cnt;
  }
}
