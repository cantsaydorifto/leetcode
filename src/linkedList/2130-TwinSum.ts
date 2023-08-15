class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function pairSum(head: ListNode | null): number {
  if (!head || !head.next) return 0;
  let twinSum = Number.MIN_SAFE_INTEGER;
  let values: number[] = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  for (let i = 0; i < values.length / 2; i++) {
    twinSum = Math.max(twinSum, values[i] + values[values.length - i - 1]);
  }
  return twinSum;
}
