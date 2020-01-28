/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root == null) return null;
  let pass = null;
  if (root.next) pass = root.next;
  if (root.right) {
    if (root.left) root.left.next = root.right;
    if (pass) {
      while (pass.left == null && pass.right == null && pass.next) pass = pass.next;
      if (pass.left) root.right.next = pass.left;
      if (pass.left == null && pass.right) root.right.next = pass.right;
    }
  }
  if (root.left && root.right == null) {
    if (pass) {
      while (pass.left == null && pass.right == null && pass.next) pass = pass.next;
      if (pass.left) root.left.next = pass.left;
      if (pass.left == null && pass.right) root.left.next = pass.right;
    }
  }
  connect(root.right);
  connect(root.left);
  return root;
};