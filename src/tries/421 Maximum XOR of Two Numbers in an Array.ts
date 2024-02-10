class TrieNode {
  next: Map<string, TrieNode> = new Map();
  isWord: boolean = false;
}

class Trie {
  root: TrieNode = new TrieNode();
  constructor() {}

  insert(word: string): void {
    let cur = this.root;
    for (let ch of word) {
      if (!cur.next.has(ch)) {
        cur.next.set(ch, new TrieNode());
      }
      cur = cur.next.get(ch)!;
    }
    cur.isWord = true;
  }

  search(word: string): boolean {
    let cur = this.root;
    for (let ch of word) {
      if (!cur.next.has(ch)) {
        return false;
      }
      cur = cur.next.get(ch)!;
    }
    return cur.isWord; //make sure it's a word
    //dont return true --> app may give true for apple
  }

  startsWith(prefix: string): boolean {
    let cur = this.root;
    for (let ch of prefix) {
      if (!cur.next.has(ch)) {
        return false;
      }
      cur = cur.next.get(ch)!;
    }
    return true;
    // return true here since we only care about prefix
  }
}
