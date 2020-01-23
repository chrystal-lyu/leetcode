var reverseBetween = function(head, m, n) {
  if (head == null) return null;
  let dummy = new ListNode(null);
  dummy.next = head;
  let prev = dummy;
  for (let i = 0; i < m-1; i++) {
    prev = prev.next;
  }
  let start = prev.next;
  let then = start.next;
  for (let i = 0; i < m - n; i++) {
    start.next = then.next;
    then.next = prev.next;
    prev.next = then;
    then = start.next;
  }
  return dummy.next;
};
