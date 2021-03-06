// 112. Path Sum
// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
// Note: A leaf is a node with no children.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

var hasPathSum = function(root, sum) {
  if (root == null) return false;
  let sub = sum - root.val;
  if (sub === 0 && root.left == null && root.right == null) return true;
  return hasPathSum(root.left, sub) || hasPathSum(root.right, sub)
};
