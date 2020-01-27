// preorder [3,9,20,15,7]
// inorder  [9,3,15,20,7]

// No. 1
var buildTree = function (preorder, inorder) {
  if (preorder.length == 0 || inorder.length == 0) return null;
  if (preorder.length) {
  let curr = preorder.shift();
  let root = new TreeNode(curr);
  let index = inorder.indexOf(curr);
  root.left = buildTree(preorder, inorder.slice(0,index));
  root.right = buildTree(preorder, inorder.slice(index+1));
  return root;
}
};

// No. 2
var buildTree = function(preorder, inorder) {
  const build = function (p1, p2, i1, i2) {
  if (p1 > p2 || i1 > i2) return null;
    let val = preorder[p1],
        index = inorder.indexOf(val),
        nLeft = index -i1,
        root = new TreeNode(val);
    root.left = build(p1+1, p1+1+nLeft, i1, index-1);
    root.right = build(p1+nLeft+1, p2, index+1, i2);
    return root;
  }
  let p = preorder.length;
  let i = inorder.length;
  return build(0, p-1, 0, i-1);
};


// preorder [3,9,20,15,7]
//           ^
//          root

// inorder  [9,3,15,20,7]
//           - ^ -------
//        left    right

// preorder [3,9,20,15,7]
//               ^^
//              root

// inorder  [9,3,15,20,7]
//               -- ^^ -
//             left    right