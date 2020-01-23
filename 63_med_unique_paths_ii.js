// No. 1
var uniquePathsWithObstacles = function(obstacleGrid) {
  let r = obstacleGrid.length;
  let c = obstacleGrid[0].length;
  let dp = Array(c).fill(null);
  dp[0] = 1;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (obstacleGrid[i][j] == 1) {
        dp[j] = 0;
      }
      else if (j > 0) {
        dp[j] += dp[j-1];
      }
    }
  }
  return dp[c-1];
};

// No. 2
var uniquePathsWithObstacles = function(obstacleGrid) {
  let n = obstacleGrid.length;
  let m = obstacleGrid[0].length;
  if (obstacleGrid[0][0] == 1) return 0;
  
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(0);
  }
  
  dp[0][0] = 1;

  for (let i = 1; i < n; i++) {
    dp[i][0] = (obstacleGrid[i][0] == 0 && dp[i-1][0] == 1) ? 1 : 0;
  }
  
  for (let i = 1; i < m; i++) {
    dp[0][i] = (obstacleGrid[0][i] == 0 && dp[0][i-1] == 1) ? 1 : 0;
  }
  
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (obstacleGrid[i][j] == 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i-1][j] + dp[i][j-1];
      }
    }
  }
  return dp[n-1][m-1];
}

uniquePathsWithObstacles([
  [0,0,0],
  [0,1,0],
  [0,0,0]
]);