var isSymmetric = function (root) {
  const isMirror = function (a,b) {
    if (a == null || b == null) return a === b;
    return isMirror(a.left, b.right) && isMirror(a.right, b.left);
  }
  if (root === null) return true;
  if (root.left === root.right) {
    return isMirror(root.left, root.right);
  }
  return false;
};