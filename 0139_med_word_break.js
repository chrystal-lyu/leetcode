var wordBreak = function(s, wordDict) {
  let n = s.length;
  let dp = new Array(n).fill(false);
  let set = new Set(wordDict);
  dp[0] = true;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let w = s.substring(i, j+1);
      if (set.has(w) && dp[i]) {
        dp[j+1] = true;
      }
    }
  }
  return dp[n+1];
};