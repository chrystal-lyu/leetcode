var generateParenthesis = function(n) {
  const backtracking = function(res, str, open, close, max) {
    if (str.length === max * 2) {
      res.push(str);
      return;
    }
    if (open < max) {
      backtracking(res, str+'(', open+1, close, max);
    }
    if (close < open) {
      backtracking(res, str+')', open, close+1, max);
    }
  }

  let res = [];
  backtracking(res, '', 0, 0, n);
  return res;
};

console.log(generateParenthesis(3));