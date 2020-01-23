// No. 1
var maxProfit = function(prices) {
  let n = prices.length;
  if (n < 2) return 0;
  let dp = new Array(n).fill(0);
  dp[0] = 0;
  for (let i = 1; i < n; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      max = Math.max(max, prices[i]-prices[j])
    }
    if (max > dp[i-1]) {
      dp[i] = max;
    } else {
      dp[i] = dp[i-1];
    }
  }
  return dp[n-1];
};

// No. 2
var maxProfit = function(prices) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};

console.log(maxProfit([7,1,5,3,6,4]))