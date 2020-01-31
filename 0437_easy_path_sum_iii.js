// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

// Return 3. The paths that sum to 8 are:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. -3 -> 11


var pathSum = function(root, sum) {
  const helper = function (node, sum) {
    if (node == null) return 0;
    sum -= node.val;
    let count = 0;
    if (sum == 0) count++;
    count += helper(node.left, sum);
    count += helper(node.right, sum);
    return count;
  };
  if (root === null) return 0;
  let res = 0;
  res += pathSum(root.left, sum);
  res += pathSum(root.right, sum);
  res += helper(root, sum);
  return res;
};
