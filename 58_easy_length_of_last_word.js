var lengthOfLastWord = function(s) {
  let res = 0;
  let i = s.length-1;
  while (i >= 0 && s.charAt(i) == ' ') {
    i--;
  }
  while (i >= 0 && s.charAt(i) !== ' ') {
    res++;
    i--;
  }
  return res;
};
console.log(lengthOfLastWord("Hello World  "))