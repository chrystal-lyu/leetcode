var levelOrderBottom = function(root) {
  const helper = function (res, node, depth) {
    if (node == null) return;
    if (res.length <= depth) {
      res.push([]);
    }
    helper(res, node.left, depth+1);
    helper(res, node.right, depth+1);
    res[depth].push(node.val);
  }
  let res = [];
  helper(res, root, 0)
  return res.reverse();
}
