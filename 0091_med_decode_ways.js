var numDecodings = function(s) {
  if (s.length == 0 || s.charAt(0) == 0) return 0;
  let n = s.length;
  let dp = new Array(n+1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 1; i < s.length; i++) {
    let prev = s.charAt(i-1) - '0';
    let curr = s.charAt(i) - '0';
    if (curr == 0 && prev == 0 || curr == 0 && (prev*10+curr) > 26) return 0;
    else if (prev == 0 || (prev*10+curr) > 26) dp[i+1] = dp[i];
    else if (curr == 0) dp[i+1] = dp[i-1];
    else dp[i+1] = dp[i-1] + dp[i];
  }
  return dp[n];
};
console.log(numDecodings("222107"))
