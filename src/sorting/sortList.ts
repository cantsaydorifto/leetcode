class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function merge(l: ListNode | null, r: ListNode | null) {
  let dummy = new ListNode(0);
  let t = dummy;
  while (l && r) {
    if (l.val < r.val) {
      t.next = l;
      l = l.next!;
    } else {
      t.next = r;
      r = r.next!;
    }
    t = t.next!;
  }
  if (l) {
    t.next = l;
  }
  if (r) {
    t.next = r;
  }
  return dummy.next;
}

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;
  }
  let right = slow.next;
  slow.next = null;

  let leftList = sortList(head);
  let rightList = sortList(right);
  return merge(leftList, rightList);
}
