// Spiral Matrix II
var generateMatrix = function(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push([]);
    for (let j = 0; j < n; j++) {
      res[i][j] = null;
    }
  }
  
  let rowStart = 0;
  let rowEnd = res.length - 1;
  let colStart = 0;
  let colEnd = res[0].length - 1;

  let a = 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    
    for (let i = colStart; i <= colEnd; i++) {
      res[rowStart][i] = a;
      a++;
    }
    rowStart++
    for (let i = rowStart; i <= rowEnd; i++) {
      res[i][colEnd] = a;
      a++;
    }
    colEnd--
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        res[rowEnd][i] = a;
        a++
      }
    }
    rowEnd--
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        res[i][colStart] = a;
        a++;
      }
    }
    colStart++
  }
  
  return res;
};
console.log(generateMatrix(9))