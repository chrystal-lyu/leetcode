// Example 1:
// s = "abc", t = "ahbgdc"

// Return true.

// Example 2:
// s = "axc", t = "ahbgdc"

// ("ace" is a subsequence of "abcde" while "aec" is not)

var isSubsequence = function(s, t) {
  if (s.length > t.length) return false;
  let i = 0;
  let j = 0;
  while (i < s.length) {
    if (j > t.length-1) return false;
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i === s.length;
};
