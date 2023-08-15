class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let tail: ListNode = head;
  let len = 1;
  while (tail.next) {
    tail = tail.next;
    len++;
  }
  tail.next = head;

  k = k % len;
  let i = 0;
  while (i < len - k) {
    tail = tail.next!;
    i++;
  }

  head = tail.next;
  tail.next = null;
  return head;
}
