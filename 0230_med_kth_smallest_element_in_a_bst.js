// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1

var kthSmallest = function(root, k) {
  let res = [];
  const inorder = function(node) {
    if (node == null) return;
    inorder(node.left);
    res.push(node.val);
    inorder(node.right);
  }
  inorder(root);
  return res[k-1];
};
