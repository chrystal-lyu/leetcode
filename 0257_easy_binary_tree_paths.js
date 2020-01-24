//Given a binary tree, return all root-to-leaf paths.

//Note: A leaf is a node with no children.

// Example:
// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

var binaryTreePaths = function(root) {
  const helper = function (res, path, node) {
    if (node.left == null && node.right == null) {
      path += node.val;
      res.push(path);
      return;
    }
    if (node.left) helper(res, path+node.val+'->', node.left);
    if (node.right) helper(res, path+node.val+'->', node.right);
  }
  
  if (root == null) return null;
  let res = [];
  helper(res, "", root);
  return res;
};

// With the help the function helper()
// If current node has left children, add node.val to path ("")
// If current node has right children, add node.val to path ("")
// Keep running until reach leaf (where node.left and node.right are null)
// This is when we add last node.val to the path (without -> after it)
// And lastly push the whole path to result
