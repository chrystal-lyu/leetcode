var minPathSum = function(grid) {
  let n = grid.length;
  let m = grid[0].length;
  if (n == 0 || m == 0) return 0;
  
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(0);
  }
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[0][i] = grid[0][i] + dp[0][i-1];
  }
  for (let i = 1; i < n; i++) {
    dp[i][0] = grid[i][0] + dp[i-1][0];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[n-1][m-1];
};

console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]))