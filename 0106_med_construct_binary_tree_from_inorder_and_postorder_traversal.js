// For example, given

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

var buildTree = function(inorder, postorder) {
  const build = function (p1, p2, i1, i2) {
    if (p1 > p2 || i1 > i2) return null;
    let val = postorder[p2];
    let index = inorder.indexOf(val);
    let nLeft = index - i1;
    let root = new TreeNode(val);
    root.left = build(p1, p1+nLeft-1, i1, index-1);
    root.right = build(p1+nLeft, p2-1, index+1, i2);
    return root;
  }
  let p = postorder.length;
  let i = inorder.length;
  return build(0, p-1 ,0 ,i-1);
};
