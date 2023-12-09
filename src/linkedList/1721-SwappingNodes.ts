class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let [p, q, r]: (ListNode | null)[] = [dummy, dummy, null];
  for (let i = 0; i < k; i++) {
    p = p!.next;
  }
  r = p;
  while (r) {
    r = r.next;
    q = q!.next;
  }
  [p!.val, q!.val] = [q!.val, p!.val];
  return dummy.next;
}
