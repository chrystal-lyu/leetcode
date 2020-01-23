var rotate = function(matrix) {
  matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i+1; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
};

console.log(rotate([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]))

// ->
// [
//  [7,4,1],
//  [8,5,2],
//  [9,6,3]
// ]