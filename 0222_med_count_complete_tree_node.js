var countNodes = function(root) {
  let count = 0;
  if (root == null) {
    return 0;
  } else {
    return countNodes(root.left) + countNodes(root.right) + 1;
  }
};
