var letterCombinations = function(digits) {
  let lib = {
    "1" : "",
    "2" : "abc",
    "3" : "def",
    "4" : "ghi",
    "5" : "jkl",
    "6" : "mno",
    "7" : "pqrs",
    "8" : "tuv",
    "9" : "wxyz",
    "0" : ""
  }
  let res = [];
  if (digits.length == 0) return res;
  const dfs = function (i, s) {
    if (i == digits.length) {
      res.push(s);
      return;
    }
    for (let c of lib[digits.charAt(i)]) {
      dfs(i+1, s+c);
    }
  }
  dfs(0, '');
  return res;
};
