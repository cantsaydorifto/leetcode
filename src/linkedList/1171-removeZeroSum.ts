class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let dummy: ListNode | null = new ListNode(0); //For edge cases like [-1,1]
  dummy.next = head;
  let ptr: ListNode | null = dummy;
  let nodeMap = new Map<number, ListNode>();
  let sum = 0;
  while (ptr) {
    //find cumulative sums
    sum += ptr.val;
    if (nodeMap.has(sum)) {
      let temp = nodeMap.get(sum)!.next;
      nodeMap.get(sum)!.next = ptr.next;
      let tempSum = sum;
      while (temp != ptr) {
        //dont delete for temp === ptr since we dont add the val to set when map.get(sum) is true
        tempSum += temp!.val;
        //delete values after removing from array
        nodeMap.delete(tempSum);
        temp = temp!.next;
      }
    } else {
      nodeMap.set(sum, ptr);
    }
    ptr = ptr.next;
  }
  return dummy.next;
}
