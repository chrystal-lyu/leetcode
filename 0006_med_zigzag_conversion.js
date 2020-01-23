var convert = function(s, numRows) {
  let n = s.length;
  let cycle = 2 * numRows - 2;
  let res = '';

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; i+j < n; j+=cycle) {
      res += s.charAt(i+j);
      if (i !== 0 && i !== numRows-1 && j + cycle - i < n) {
        res += s.charAt(j+cycle-i);
      }
    }
  }
  return res;
};

console.log(convert('PAYPALISHIRING',3))