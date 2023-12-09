class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(0);
  dummy.next = list1;
  let [ptr1, ptr2] = [dummy, dummy!.next];
  while (a > 0 || b > 0) {
    if (a-- > 0) ptr1 = ptr1.next!;
    if (b-- > 0) ptr2 = ptr2!.next;
  }
  ptr1!.next = list2;
  while (list2!.next) {
    list2 = list2!.next;
  }
  list2!.next = ptr2!.next;
  return dummy!.next;
}
