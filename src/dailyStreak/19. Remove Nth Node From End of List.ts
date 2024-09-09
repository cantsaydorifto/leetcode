class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let [cur, t] = [dummy, head] as [ListNode | null, ListNode | null];
  let i = n;
  while (t && i > 0) {
    t = t.next;
    i--;
  }
  while (t) {
    cur = cur!.next;
    t = t.next;
  }
  cur!.next = cur!.next!.next;
  return dummy.next;
}
