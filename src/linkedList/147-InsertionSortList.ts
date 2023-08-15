class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function insertionSortList(head: ListNode | null): ListNode | null {
  let node: ListNode | null = head;
  if (!head || !head.next) return head;
  let prev = new ListNode(-5001);
  head = prev;
  while (node) {
    let temp = node.next;
    prev = head;
    while (prev.next && prev.next.val < node.val) {
      prev = prev.next;
    }
    node.next = prev.next;
    prev.next = node;
    node = temp;
  }
  return head.next;
}
