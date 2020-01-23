var longestPalindrome = function(s) {
  let n = s.length;
  let max = 0;
  let lo = 0;
  
  if (n < 2) return s;

  const extendedPalindrome = function (str, l, r) {
    while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
      l--;
      r++;
    }
    if (max < r - l - 1) {
      lo = l+1;
      max = r - l - 1;
    }
  }

  for (let i=0; i<n-1; i++) {
    extendedPalindrome(s, i, i);
    extendedPalindrome(s, i, i+1);
  }
  
  return s.substring(lo, lo+max);
}

console.log(longestPalindrome('cbabc'));
