// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

var levelOrder = function(root) {
  let res = [];
  const helper = function(node, depth) {
    if (node == null) return;
    if (res.length <= depth) {
      res.push([]);
    }
    res[depth].push(node.val);
    if (node.left) helper(node.left, depth+1);
    if (node.right) helper(node.right, depth+1);
  }
  helper(root, 0);
  return res;
};
