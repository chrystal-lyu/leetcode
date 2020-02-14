var lowestCommonAncestor = function(root, p, q) {
  if (root == null || root == p || root == q) return root;
  let l = lowestCommonAncestor(root.left, p, q);
  let r = lowestCommonAncestor(root.right, p, q);
  if (l == null) {
    return r;
  } else if (r == null) {
    return l;
  } else {
    return root;
  }
};

//          3
//        /   \
//       5     1
//      / \   / \
//     6   2 0   8
//        / \
//       7   4

// p = 5 q = 1 return 3
// p = 5 q = 4 return 5
