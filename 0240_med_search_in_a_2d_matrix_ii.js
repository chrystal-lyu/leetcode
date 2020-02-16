// [
//  [1,   4,  7, 11, 15],
//  [2,   5,  8, 12, 19],
//  [3,   6,  9, 16, 22],
//  [10, 13, 14, 17, 24],
//  [18, 21, 23, 26, 30]
// ]

// No. 1
var searchMatrix = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};

// No. 2
var searchMatrix  = function(matrix, target) {
  if (matrix.length == 0 || matrix[0].length == 0) return false;
  let row = 0;
  let col = matrix[0].length-1;
  while (row <= matrix.length-1 && col >= 0) {
    if (matrix[row][col] == target) {
      return true;
    } else if (matrix[row][col] < target) {
      row++;
    } else if (matrix[row][col] > target) {
      col--;
    }
  }
  return false;
}