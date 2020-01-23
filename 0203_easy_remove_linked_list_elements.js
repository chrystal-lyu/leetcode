// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5
var removeElements = function(head, v) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let curr = dummy;
  while (curr.next !== null) {
    if (curr.next.val == v) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return dummy.next;
};
