// No. 1
var mergeTwoLists = function(l1, l2) {
  let l3 = new ListNode(null);
  let dummy = l3;
  
  while (l1 || l2) {
    if (l1 == null) {
      l3.next = new ListNode(l2.val)
      l2 = l2.next;
    } else if (l2 == null) {
      l3.next = new ListNode(l1.val)
      l1 = l1.next;
    } else {
      if (l1.val <= l2.val) {
        l3.next = new ListNode(l1.val)
        l1 = l1.next;
      } else {
        l3.next = new ListNode(l2.val)
        l2 = l2.next;
      }
    }
    l3 = l3.next;
  }
  
  return dummy.next;
};

// No. 2
var mergeTwoLists = function(l1, l2) {
  let l3 = new ListNode(null);
  let dummy = l3;
  
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      l3.next = l1
      l1 = l1.next;
    } else {
      l3.next = l2;
      l2 = l2.next;
    }
    l3 = l3.next;
  }
  l3.next = l1 || l2;
  return dummy.next;
};