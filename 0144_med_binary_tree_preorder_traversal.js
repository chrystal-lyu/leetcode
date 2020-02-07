var preorderTraversal = function(root) {
  let list = [];
  let stack = [];
  while (root !== null) {
    list.push(root.val);
    if (root.right !== null) {
      stack.push(root.right);
    }
    root = root.left;
    if (root == null && stack.length !== 0) {
      root = stack.pop();
    }
  }
  return list;
};
