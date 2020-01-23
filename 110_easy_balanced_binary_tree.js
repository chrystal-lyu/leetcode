//No. 1
var isBalanced = function(root) {
  const depth = function (node) {
    if (node == null) return 0;
    return Math.max(depth(node.right), depth(node.left)) + 1;
  }
  const helper = function (node) {
    if (node === null) return true;
    let left = depth(node.left);
    let right = depth(node.right);
    return Math.abs(left-right) && helper(node.left) && helper(node.right);
  }
  return helper(root);
}

// No. 2
var isBalanced = function(root) {
  const depth = function (node) {
    if (node === null) return 0;

    let leftDepth = depth(node.left);
    if (leftDepth == -1) return -1;
    let rightDepth = depth(node.right);
    if (rightDepth == -1) return -1;

    if (Math.abs(leftDepth-rightDepth) > 1) return -1;
    return Math.max(leftDepth, rightDepth) + 1;
  }
  return depth(root) !== -1;
}

