var removeNthFromEnd = function(head, n) {
  // for special cases where first node need to be deleted
  let dummy = new ListNode(0);
  let slow = dummy;
  let fast = dummy;
  dummy.next = head;

  // move fast to n+1 position first
  for (let i = 1; i <= n+1; i++) {
    fast = fast.next;
  }

  // move slow and fast together, maintaining the same gap (n)
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // delete the desired node
  slow.next = slow.next.next;
  return dummy.next;
}
// [1,2,3,4,5], n = 2
// ->[1,2,3,5]