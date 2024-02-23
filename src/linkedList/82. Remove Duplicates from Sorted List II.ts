class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-101, head);
  let [cur, prev, prevRemovedval] = [head, dummy, -101] as [
    ListNode | null,
    ListNode,
    number
  ];
  while (cur) {
    while (cur.next && cur.val === cur.next.val) {
      prevRemovedval = cur.val;
      cur = cur.next;
    }
    if (prevRemovedval === cur.val) {
      prev.next = cur.next;
      prev = cur;
      cur = cur.next;
      continue;
    }
    prev = cur;
    cur = cur.next;
  }
  return dummy.next;
}
