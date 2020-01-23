var uniquePaths = function(m, n) {
  let row = Array(n).fill(null);
  let grid = Array(m).fill([...row]);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0) {
        grid[i][j] = 1
      } else {
        grid[i][j] = grid[i-1][j] + grid[i][j-1]
      }
    }
  }
  return grid[m-1][n-1];
};
uniquePaths(7,3)