var deleteDuplicates = function(head) {
  if (head == null) return head;
  let dummy = new ListNode(null);
  dummy.next = head;
  let prev = dummy;
  let curr = head;
  let first = dummy;
  while (curr !== null && curr.next !== null) {
    if (curr.val !== prev.val && curr.val !== curr.next.val) {
      first.next = curr;
      first = first.next;
    }
    prev = curr;
    curr = curr.next;
  } 
};

// Input: 1->2->3->3->4->4->5
// Output: 1->2->5