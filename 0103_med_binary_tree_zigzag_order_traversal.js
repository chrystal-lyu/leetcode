// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]

var zigzagLevelOrder = function(root) {
  let res = [];
  const buildZigzag = function(node, depth) {
    if (node == null) return;
    if (res.length <= depth) {
      res.push([]);
    }
    if (depth%2 == 0) {
      res[depth].push(node.val);
    } else {
      res[depth].unshift(node.val);
    }
    buildZigzag(node.left, depth+1);
    buildZigzag(node.right, depth+1);
  }
  buildZigzag(root, 0);
  return res;
};

// In order to make the order zigzag-ed, we check if current depth is even or odd
// If it is even, we push (add from the end) the values in this depth
// If it is odd, we unshift (add from the head) the values in this depth
