// Given a binary tree, flatten it to a linked list in-place. 
// For example, given the following tree:
//     1
//    / \
//   2   5
//  / \   \
// 3   4   6

// The flattened tree should look like:
// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6

var flatten = function(root) {
  let temp = null;
  const build = function(node) {
    if (node == null) return;
    build(node.right);
    build(node.left);
    node.right = temp;
    node.left = null;
    temp = node;
  }
  build(root);
};