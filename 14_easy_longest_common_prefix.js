var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let i = 0;
  for (i; i < strs[0].length; i++) {
    for (let l = 1; l < strs.length; l++) {
      if (strs[l-1].charAt(i) !== strs[l].charAt(i)) {
        return i === 0 ? "" : strs[0].substr(0,i);
      }
    }
  }
  return strs[0].substr(0,i)
};

console.log(longestCommonPrefix(["car","car","car"]));