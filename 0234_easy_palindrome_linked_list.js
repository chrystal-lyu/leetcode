// No. 1
// Reversing the whole list and compare
var isPalindrome = function(head) {
  let reversed = new ListNode(null);
  let curr = head;
  while (curr !== null) {
    let pre = new ListNode(curr.val);
    pre.next = reversed;
    reversed = pre;
    curr = curr.next;
  }
  while (head !== null) {
    if (head.val !== reversed.val) {
      return false;
    } else {
      head = head.next;
      reversed = reversed.next;
    }
  }
};

// No. 2
// Reversing the first half of the list and compare to the rest
// Need to take care of odd or even list length case
var isPalindrome = function(head) {
  if (head == null || head.next == null) return true;
  let reversed = null;
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    let temp = reversed;
    reversed = slow;
    slow = slow.next
    reversed.next = temp;
  }
  // check is list length is odd, if it is move slow to next (to skip the middle value) and then start comparison
  if (fast !== null) {
    slow = slow.next;
  }
  while (slow !== null) {
    if (slow.val !== reversed.val) return false;
    slow = slow.next;
    reversed = reversed.next;
  }
  return true;
}
