var partition = function(head, x) {
  if (head == null) return null;
  let bigger = new ListNode(null);
  let b = bigger;
  let smaller = new ListNode(null);
  let s = smaller;
  while (head !== null) {
    if (head.val < x) {
      s.next = new ListNode(head.val);
      s = s.next;
    } else {
      b.next = new ListNode(head.val);
      b = b.next;
    }
    head = head.next
  }
  s.next = bigger.next;
  return smaller.next;
};
// Input: head -> 1->4->3->2->5->2 -> null, x = 3
// Output: 1->2->2->4->3->5