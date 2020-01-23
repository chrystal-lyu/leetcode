var swapPairs = function(head) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let node = dummy;
  
  while (node.next && node.next.next) {
    let swap1 = node.next;
    let swap2 = node.next.next;
    node.next = swap2;
    swap1.next = swap2.next;
    swap2.next = swap1;
    node = swap1;
  }
  
  return dummy.next;
};

// [1,2,3,4,5,6]
// v
// [2,1,4,3,6,5]