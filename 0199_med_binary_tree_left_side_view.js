// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

var rightSideView = function(root) {
  let res = [];
  const rightView = function(node,res,depth) {
    if (node == null) return;
    if (res.length == depth) {
      res.push(node.val);
    }
    rightView(node.right,res,depth+1);
    rightView(node.left,res,depth+1);
  }
  rightView(root,res,0);
  return res;
};
