class DoublyListNode {
  val: number;
  next: DoublyListNode | null;
  prev: DoublyListNode | null;
  constructor(
    val: number,
    next?: DoublyListNode | null,
    prev?: DoublyListNode | null
  ) {
    this.val = val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}

class MyCircularDeque {
  head: DoublyListNode | null;
  tail: DoublyListNode | null;
  maxLen: number;
  length: number;
  constructor(k: number) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.maxLen = k;
  }

  insertFront(value: number): boolean {
    if (this.length >= this.maxLen) return false;
    let node = new DoublyListNode(value);
    if (this.length === 0 || !this.tail || !this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return true;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.tail.next = this.head;
    this.head.prev = this.tail;
    this.length++;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.length >= this.maxLen) return false;
    let node = new DoublyListNode(value);
    if (this.length === 0 || !this.tail || !this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return true;
    }
    node.next = this.head;
    this.head.prev = node;
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = this.tail.next;
    this.length++;
    return true;
  }

  deleteFront(): boolean {
    if (this.length === 0 || !this.head || !this.tail) return false;
    this.head = this.head.next;
    this.tail.next = this.head === this.tail ? null : this.head;
    if (this.head) {
      this.head.prev = this.head === this.tail ? null : this.tail;
    } else this.tail = null;
    this.length--;
    return true;
  }

  deleteLast(): boolean {
    if (this.length === 0 || !this.head || !this.tail) return false;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = this.head === this.tail ? null : this.head;
      this.head.prev = this.head === this.tail ? null : this.tail;
    } else {
      this.head = null;
    }
    this.length--;
    return true;
  }

  getFront(): number {
    return this.head ? this.head.val : -1;
  }

  getRear(): number {
    return this.tail ? this.tail.val : -1;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  isFull(): boolean {
    return this.length === this.maxLen;
  }
}
