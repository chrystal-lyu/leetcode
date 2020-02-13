// Input: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4

var maximalSquare = function(matrix) {
  if (matrix.length == 0) return 0;
  let n = matrix.length;
  let m = matrix[0].length;
  let dp = new Array(n);
  let max = 0;
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(m+1).fill(0);
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (matrix[i-1][j-1] == '1') {
        let up = dp[i-1][j];
        let left = dp[i][j-1];
        let corner = dp[i-1][j-1];
        dp[i][j] = Math.min(Math.min(up, left), corner) + 1;
        max = Math.max(max, dp[i][j]);
      } 
    }
  }
  return max*max;
};
