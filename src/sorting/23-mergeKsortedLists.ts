class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode>): ListNode | null {
  if (!lists || lists.length === 0) return null;
  return merge(lists, 0, lists.length - 1);
}

function merge(lists: ListNode[], l: number, r: number): ListNode {
  if (l === r) return lists[l];
  const mid = Math.floor((l + r) / 2);
  let firstNode = merge(lists, l, mid);
  let secondNode = merge(lists, mid + 1, r);
  return merge2Lists(firstNode, secondNode);
}

function merge2Lists(l: ListNode, r: ListNode): ListNode {
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
    t = t.next;
  }
  if (l) {
    t.next = l;
  }
  if (r) {
    t.next = r;
  }
  return dummy.next!;
}
