// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
var reverseList = function(head) {
  let curr = head;
  let prev = null;
  while (curr !== null) {
    let tempNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tempNext;
  }
  return prev;
};

// head->1->2->3->4->5->NULL
// prev = null
// curr = head;
// head->1->2->3->4->5->NULL
//       ^
//      curr

 