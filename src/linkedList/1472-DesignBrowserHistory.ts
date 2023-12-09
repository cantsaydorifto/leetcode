class BrowserNode {
  val: string;
  next: BrowserNode | null;
  prev: BrowserNode | null;
  constructor(
    val?: string,
    next?: BrowserNode | null,
    prev?: BrowserNode | null
  ) {
    this.val = val === undefined ? "0" : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}

class BrowserHistory {
  curr: BrowserNode;
  constructor(homepage: string) {
    this.curr = new BrowserNode(homepage);
  }

  visit(url: string): void {
    this.curr.next = new BrowserNode(url);
    this.curr.next.prev = this.curr;
    this.curr = this.curr.next;
  }

  back(steps: number): string {
    while (steps-- > 0 && this.curr.prev) {
      this.curr = this.curr.prev;
    }
    return this.curr.val;
  }

  forward(steps: number): string {
    while (steps-- > 0 && this.curr.next) {
      this.curr = this.curr.next;
    }
    return this.curr.val;
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
