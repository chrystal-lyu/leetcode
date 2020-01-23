var findDiagonalOrder = function(matrix) {
  if (matrix.length == 0) return [];
  let m = matrix.length;
  let n = matrix[0].length;
  let res = Array(m*n);

  let r = 0,
      c = 0;

  for (let i = 0; i < res.length; i++) {
    res[i] = matrix[r][c];
    if ((c + r) % 2 == 0) {
      if (c == n - 1) { r++; }
      else if (r == 0) { c++; }
      else { r--; c++; }
    } else {
      if (r == m - 1) { c++; }
      else if (c == 0) { r++; }
      else { c--; r++; }
    }
  }
  return res;
}; 

findDiagonalOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ])