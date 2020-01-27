// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

var pathSum = function(root, sum) {
  const findSum = function (res, arr, remain, node) {
    if (node == null) return;
    arr.push(node.val);
    if (remain == node.val && node.left == null && node.right == null) {
      res.push([...arr]);
    } else {
      findSum(res, arr, remain-node.val, node.left);
      findSum(res, arr, remain-node.val, node.right);
    }
    arr.pop();
  }
  let res = [];
  findSum(res, [], sum, root);
  return res;
};
