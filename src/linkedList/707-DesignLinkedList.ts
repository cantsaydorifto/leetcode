class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class MyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.length) return -1;
    let t = this.head;
    while (index > 0) {
      t = t!.next;
      index--;
    }
    return t!.val;
  }

  addAtHead(val: number): void {
    let temp = this.head;
    this.head = new ListNode(val);
    this.head.next = temp;
    if (!this.tail) {
      this.tail = this.head;
    }
    this.length++;
  }

  addAtTail(val: number): void {
    let node = new ListNode(val);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }
    this.tail.next = node;
    this.tail = this.tail.next;
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.length) return this.addAtTail(val);

    let t = this.head;
    for (let i = 0; i < index - 1; i++) {
      t = t!.next;
    }
    let temp = t!.next;
    t!.next = new ListNode(val);
    t!.next.next = temp;
    this.length++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.length) return;
    if (index === 0) {
      this.head = this.head!.next;
      if (!this.head) {
        this.tail = null;
      }
      this.length--;
      return;
    }
    let t = this.head;
    for (let i = 0; i < index - 1; i++) {
      t = t!.next;
    }
    t!.next = t!.next!.next;
    if (!t!.next) {
      this.tail = t;
    }
    this.length--;
  }
}
