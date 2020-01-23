var searchMatrix = function(matrix, target) {
  if (matrix.length == 0 || matrix[0].length == 0) return false;
  let n = matrix.length;
  let m = matrix[0].length;
  let lo = 0, hi = m-1;
  let targetRow = 0;
  let value;
  for (let i = 0; i < n-1; i++) {
    if (target == matrix[i][0]) return true;
    if (target > matrix[i][0] && target < matrix[i+1][0]) {
      targetRow = i;
      break;
    }
    targetRow = i + 1;
  }
  if (matrix[targetRow].length == 1 && matrix[targetRow][0] == target) return true;
  while (lo < hi) {
    let mid = Math.floor((lo+hi)/2);
    if (matrix[targetRow][mid] == target) return true;
    if (matrix[targetRow][mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
    value = matrix[targetRow][hi]
  }
  return value === target;
};
console.log(searchMatrix([
  [1]
], 1))
