var generateTrees = function(n) {
  const buildTree = function (start, end) {
    if (start > end) res.push(null);
    for (let i = start; i <= end; i++) {
      let rightList = generateTrees(i+1, end);
      let leftList = generateTrees(start, i-1);
      for (let left in leftList) {
        for (let right in rightList) {
          let root = new TreeNode(i);
          root.left = left;
          root.right = right;
          res.push(root)
        }
      }
    }
  }
  let res = [];
  if (n == 0) return res;
  buildTree(1, n)
  return res;
};