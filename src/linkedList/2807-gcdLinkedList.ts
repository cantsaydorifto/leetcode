class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hcf(number1: number, number2: number) {
  let hcf = 1;
  for (let i = 1; i <= number1 && i <= number2; i++) {
    if (number1 % i == 0 && number2 % i == 0) {
      hcf = i;
    }
  }
  return hcf;
}

function insertBetween(val: number, prev: ListNode, next: ListNode) {
  prev.next = new ListNode(val);
  prev.next.next = next;
}

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let prev = head;
  if (!prev) return head;
  while (prev.next) {
    let temp: ListNode = prev.next;
    insertBetween(hcf(prev.val, prev.next.val), prev, prev.next);
    prev = temp;
  }
  return head;
}
