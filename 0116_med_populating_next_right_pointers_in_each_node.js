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
  if (root == null) return root;
  if (root.left !== null) {
    root.left.next = root.right;
    if (root.next !== null) {
      root.right.next = root.next.left;
    } else {
      root.right.next = null;
    }
  }
  connect(root.left);
  connect(root.right);
  return root;
};
