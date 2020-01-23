var rotateRight = function(head, k) {
  if (head == null || head.next == null) return head;
  let dummy = new ListNode(null);
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;

  // find linked list length
  let i = 0;
  while(fast.next !== null) {
    fast = fast.next;
    i++;
  }
  let j = i - k%i;
  for (j; j > 0; j--) {
    slow = slow.next;
  }
  
  let newHead = slow.next;
  slow.next = null;
  newHead.next = dummy.next;
  return newHead;
};

// Input:  1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
