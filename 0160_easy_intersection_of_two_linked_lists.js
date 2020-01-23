
// Write a program to find the node at which 
// the intersection of two singly linked lists begins.

var getIntersectionNode = function(headA, headB) {
  if (headA == null || headB == null) return null;
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a == null ? headB : a.next;
    b = b == null ? headA : b.next;
  }
  return a;
};

//  [4,1,8,4,5]
//[5,0,1,8,4,5]
