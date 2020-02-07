// Input: S = "5F3Z-2e-9-w", K = 4

// Output: "5F3Z-2E9W" 

var licenseKeyFormatting = function(S, K) {
  let res = [];
  let len = 0;
  for (let i = S.length-1; i >= 0; i--) {
    if (S.charAt(i) !== '-') {
      if (len > 0 && len % K == 0) res.push('-');
      res.push(S.charAt(i));
      len++;
    }
  }
  return res.reverse().join('').toUpperCase();
};
