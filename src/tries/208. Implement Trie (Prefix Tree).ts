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

  startsWith(prefix: string): boolean {
    let cur = this.root;
    for (const ch of prefix) {
      if (!cur.next.has(ch)) {
        return false;
      }
      cur = cur.next.get(ch)!;
    }
    return true;
  }
}
