class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeNodes(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;
  let prev = head;
  prev.val = -1;
  while (prev.next) {
    let tmp: ListNode = prev;
    let sum = 0;
    while (tmp.next && tmp.val !== 0) {
      if (tmp.val === -1) tmp.val = 0;
      sum += tmp.next.val;
      if (tmp.next.val === 0) {
        sum += tmp.next.val;
      }
      tmp = tmp.next;
    }
    prev.next = tmp;
    tmp.val = sum;
    prev = tmp;
  }
  return head.next;
}
