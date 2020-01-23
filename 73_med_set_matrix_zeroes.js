// Set Matrix Zeroes

// No.1 Extra space
var setZeroes = function(matrix) {
  let row = matrix.length,
      col = matrix[0].length;
  let copy = [];
  for (let i = 0; i < row; i++) {
    copy.push([])
    for (let j = 0; j < col; j++) {
      copy[i][j] = matrix[i][j];
    }
  }
  // set row to zero
  const setRow = function (matrix, row) {
    for (let i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0;
    }
  }
  // set column to zero
  const setCol = function (matrix, col) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (copy[i][j] === 0) {
        setRow(matrix, i);
        setCol(matrix, j);
      }
    }
  }
  return matrix;
};

// No.2 O(1) space
var setZeroes = function(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let col0 = false;
  for (let i = 0; i < n; i++) {
    if (matrix[i][0] == 0) col0 = true;
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 1; j--)
        if (matrix[i][0] == 0 || matrix[0][j] == 0)
            matrix[i][j] = 0;
    if (col0) matrix[i][0] = 0;
  }
  return matrix;
};
console.log(setZeroes([
  [1,1,2,3,0,4,0,2],
  [3,4,5,2,3,4,5,2],
  [1,3,1,5,3,0,5,2]
]));