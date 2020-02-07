var sortList = function(head) {
  if (head == null || head.next == null) return head;
  let slow = head;
  let fast = head;
  let prev = null;
  const merge = function (l1, l2) {
    let l = new ListNode(0);
    let p = l;
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        p.next = l1;
        l1 = l1.next;
      } else {
        p.next = l2;
        l2 = l2.next;
      }
      p = p.next;
    }
    if (l1 !== null) {
      p.next = l1;
    }
    if (l2 !== null) {
      p.next = l2;
    }
    return l.next;
  }
  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  let l1 = sortList(head);
  let l2 = sortList(slow);
  return merge(l1,l2);
};
