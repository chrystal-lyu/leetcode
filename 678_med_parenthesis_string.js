var checkValidString = function(s) {
  let low = 0,
      high = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      low++;
      high++;
    } else if (s[i] == ')') {
      if (low > 0) low--;
      high--;
    } else {
      if (low > 0) low--;
      high++
    }
    if (high < 0) return false;
  }
};
console.log(checkValidString('(**())'));
