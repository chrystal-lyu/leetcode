/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let mode = [];
  let curCount = 0;
  let curValue = null;
  let maxCount = -1;
  
  const inorder = function (node) {
    if (node == null) return;
    inorder(node.left);
    if (node.val == curValue) {
      curCount++;
    } else {
      curCount = 1;
    }
    curValue = node.val;
    if (curCount > maxCount) {
      mode = [node.val];
      maxCount = curCount;
    } else if (curCount == maxCount) {
      mode.push(node.val);
    }
    inorder(node.right);
  }
  inorder(root);
  return mode;
};
