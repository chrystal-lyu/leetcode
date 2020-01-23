var inorderTraversal = function(root) {
  if (root == null) return [];
  let stack = [];
  let res = [];
  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }
  return res;
};
console.log(inorderTraversal(1))
