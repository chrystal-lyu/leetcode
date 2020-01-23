var rob = function(nums) {
  let n = nums.length;
  if (n == 0) return 0;
  let dp = new Array(n).fill(0);
  dp[0] = nums[0];
  dp[1] = nums[1] > nums[0] ? nums[1] : nums[0];
  for (let i = 2; i < n; i++) {
    let sum = nums[i]+dp[i-2]
    dp[i] = sum > dp[i-1] ? sum : dp[i-1];
  }
  return dp[n-1];
};
console.log(rob([2,7,9,3,1]))