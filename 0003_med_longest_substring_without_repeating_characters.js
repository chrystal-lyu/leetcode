const lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  let res = Number.MIN_VALUE;
  let set = new Set();

  for (let i = 0, j = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      set.clear();
      j++;
      i=j;
    }
    set.add(s[i]);
    res = Math.max(res, set.size);
  }
  return res;
}

console.log(lengthOfLongestSubstring("pwwkew"));
