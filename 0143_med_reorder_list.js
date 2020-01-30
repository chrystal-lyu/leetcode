var reorderList = function(head) {
  let p1 = head;
  let p2 = head;
  while (p1.next !== null && p2.next.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  let preMiddle = p1;
  let preCurrent = p1.next;
  while (preCurrent.next !== null) {
    let current = preCurrent.next;
    preCurrent.next = current.next;
    current.next = preMiddle.next;
    preMiddle.next = current;
  }
  p1 = head;
  p2 = preMiddle.next;
  while (p1 !== preMiddle) {
    preMiddle.next = p2.next;
    p2.next = p1.next;
    p1.next = p2;
    p1 = p2.next;
    p2 = preMiddle.next;
  }
};
