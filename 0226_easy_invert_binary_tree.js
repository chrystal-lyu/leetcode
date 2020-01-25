// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

var invertTree = function(root) {
  if (root == null || (root.left == null && root.right == null)) return root;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
