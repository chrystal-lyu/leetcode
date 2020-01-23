var generate = function(rowIndex) {
  let res = [];
  for (let i = 0; i < rowIndex; i++) {
    let row = new Array(i+1).fill(0);
    row[0] = 1;
    row[row.length-1] = 1;
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = res[i-1][j-1]+res[i-1][j];
    }
    res.push(row);
  }
  return res;
};

console.log(generate(5));