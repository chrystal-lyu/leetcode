var countSubstrings = function(s) {
  function validPalindrome (str, left, right) {
    let count = 0;
    while (left >= 0 && right < str.length && str.charAt(left) == str.charAt(right)) {
      left--;
      right++;
      count++;
    }
    return count;
  }
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res += validPalindrome(s, i, i);
    res += validPalindrome(s, i, i + 1);
  }
  return res;
};
countSubstrings('aabaa');
