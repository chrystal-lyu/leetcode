var maxIncreaseKeepingSkyline = function(grid) {
  let lr = [];
  let td = [];
  for (let row of grid) {
    let max = Number.MIN_VALUE;
    for (let r of row) {
      max = Math.max(max, r);
    }
    lr.push(max);
  }
  for (let j = 0; j < grid.length; j++) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < grid[0].length; i++) {
      max = Math.max(max, grid[i][j]);
    }
    td.push(max);
  }
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let limit = Math.min(lr[i], td[j]);
      result += (limit - grid[i][j]);
    }
  }
  return result;
};
maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]])