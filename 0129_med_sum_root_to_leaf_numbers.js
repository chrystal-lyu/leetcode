// Input: [4,9,0,5,1]
//     4
//    / \
//   9   0
// / \
// 5   1
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.
var sumNumbers = function(root) {
  let sum = 0;
  const findSum = function (node,num) {
    if (node == null) return;
    num += node.val;
    if (node.left == null && node.right == null) {
      sum += num-0;
    }
    findSum(node.left, num);
    findSum(node.right, num);
    num -= node.val;
  }
  findSum(root,'');
  return sum;
};
