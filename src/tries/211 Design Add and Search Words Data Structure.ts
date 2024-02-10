class TrieNode {
  next: Map<string, TrieNode> = new Map();
  isWord: boolean = false;
}

class WordDictionary {
  root: TrieNode = new TrieNode();
  alphabets: string[] = getAlphabets();

  constructor() {}

  addWord(word: string): void {
    let cur = this.root;
    for (let ch of word) {
      if (!cur.next.has(ch)) {
        cur.next.set(ch, new TrieNode());
      }
      cur = cur.next.get(ch)!;
    }
    cur.isWord = true;
  }

  dfs(str: string, node: TrieNode): boolean {
    if (str.length === 0) return node.isWord;
    if (str[0] === ".") {
      for (let ch of this.alphabets) {
        if (node.next.has(ch))
          if (this.dfs(str.substring(1), node.next.get(ch)!)) {
            return true;
          }
      }
      return false;
    }
    if (!node.next.has(str[0])) return false;
    return this.dfs(str.substring(1), node.next.get(str[0])!);
  }

  search(word: string): boolean {
    return this.dfs(word, this.root);
  }
}

function getAlphabets() {
  const arr = [];
  for (let i = 97; i < 123; i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
}
