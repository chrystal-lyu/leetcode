// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, 
// with values 9 and 15 respectively. Return 24.

var sumOfLeftLeaves = function(root) {
  let sum = 0;
  const dfs = function (node) {
    if (node == null) return;
    if (node.left && node.left.left == null && node.left.right == null) {
      sum += node.left.val;
    }
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return sum;
};
