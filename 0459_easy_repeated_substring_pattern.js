var repeatedSubstringPattern = function(s) {
  let str = s + s;
  let trim = str.substring(1, str.length-1)
  return trim.includes(s);
};
