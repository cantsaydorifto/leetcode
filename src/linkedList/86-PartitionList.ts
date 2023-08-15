class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) return null;
  const before: ListNode[] = [];
  const after: ListNode[] = [];
  let node: ListNode | null = head;
  while (node) {
    if (node.val < x) {
      before.push(node);
    } else {
      after.push(node);
    }
    node = node.next;
  }
  for (let i = 0; i < after.length; i++) {
    if (i === after.length - 1) {
      after[i].next = null;
      break;
    }
    after[i].next = after[i + 1];
  }
  for (let i = 0; i < before.length; i++) {
    if (i === before.length - 1) {
      before[i].next = after[0] || null;
      break;
    }
    before[i].next = before[i + 1];
  }
  return before[0] || after[0];
}
