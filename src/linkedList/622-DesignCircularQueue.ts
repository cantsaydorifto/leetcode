class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next?: ListNode | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

class MyCircularQueue {
  head: ListNode | null;
  tail: ListNode | null;
  maxLen: number;
  length: number;
  constructor(k: number) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.maxLen = k;
  }

  enQueue(value: number): boolean {
    if (this.length >= this.maxLen) return false;
    let node = new ListNode(value);
    if (this.length === 0 || !this.tail || !this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return true;
    }
    node.next = this.head;
    this.tail.next = node;
    this.tail = this.tail.next;
    this.length++;
    return true;
  }

  deQueue(): boolean {
    if (this.length === 0 || !this.head || !this.tail) return false;
    this.head = this.head.next;
    this.tail.next = this.head === this.tail ? null : this.head;
    if (!this.head) this.tail = null;
    this.length--;
    return true;
  }

  Front(): number {
    return this.head ? this.head.val : -1;
  }

  Rear(): number {
    return this.tail ? this.tail.val : -1;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  isFull(): boolean {
    return this.length === this.maxLen;
  }
}
