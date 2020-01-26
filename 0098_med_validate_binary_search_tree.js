var isValidBST = function(root) {
  const check = function(node, min, max) {
    if (node == null) return true;
    let val = node.val;
    if ((min !== null && val <= min) || (max !== null && val >= max)) return false;
    return check(node.left, min, val) && check(node.right, val, max)
  }
  return check(root, null, null);
};

// Maintain a min and a max value for each node we at looking at
// At the root, there's no rule (min = null, max = null) no need to compare to anyting

// As we travel down the tree:

// If the current node belongs to left child of its parent
// It must be smaller than its parent value (which is stored in max)

// If the current node belongs to right child of its parent
// It must be bigger than its parent value (which is stored in min)

// Once we find a node that breaks the rule (when min/max has value) return false
