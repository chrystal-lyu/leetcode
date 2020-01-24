// Input: head = [4,5,1,9], node = 5

// Output: [4,1,9]

var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

// ehh