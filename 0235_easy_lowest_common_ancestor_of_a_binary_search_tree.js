var lowestCommonAncestor = function(root, p, q) {
  let parentVal = root.val;
  let pVal = p.val;
  let qVal = q.val;
  if (pVal > parentVal && qVal > parentVal) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (pVal < parentVal && qVal < parentVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};

// Because it was a biney search tree: 
// At any node, its left child value is always smaller and right child value is always larger
// Using this unique property, when traversing the tree compare p and q with the current node 
// If p and q are both larger than the current node, then we go to its right children subtree
// If p and q are both smaller than the current node, then we go to its left children subtree
// Until we reach to a node that is one larger/smaller and another smaller/larger (or one of them equals to current node)
// That is the lowest common ancestor we are looking for
