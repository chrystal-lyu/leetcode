// Given a linked list, return the node where the cycle begins. 
// If there is no cycle, return null.
var detectCycle = function(head) {
  let slow = head,
      fast = head,
      begin = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      while (slow !== begin) {
        slow = slow.next;
        begin = begin.next;
      }
      return begin;
    }
  }
};