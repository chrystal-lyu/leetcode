var strStr = function(haystack, needle) {
  let res = 0;
  if (needle.length == 0) return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length && haystack.charAt(i+j) == needle.charAt(j); j++) {
      if (j == needle.length - 1) return i;
    }
  }
  return -1;
};