// Given the sorted linked list: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

var sortedListToBST = function(head) {
  const buildFromArray = function (arr) {
    if (arr.length == 0) return null;
    if (arr.length) {
      let mid = Math.floor(arr.length/2);
      let root = new TreeNode(arr[mid]);
      root.left = buildFromArray(arr.slice(0,mid));
      root.right = buildFromArray(arr.slice(mid+1));
      return root;
    }
  }
  let list = [];
  while (head !== null) {
    list.push(head.val);
    head = head.next;
  }
  return buildFromArray(list);
};
