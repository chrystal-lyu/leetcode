var maximumSwap = function(num) {
  let digits = num.toString().split('');
  let bin = Array(10);
  for (let i = 0; i < digits.length; i++) {
    bin[digits[i]] = i;
  }
  for (let i = 0; i < digits.length; i++) {
    for (let k = 9; k > digits[i]; k--) {
      if (bin[k] > i) {
        let temp = digits[i];
        digits[i] = digits[bin[k]]
        digits[bin[k]] = temp;
        return parseInt(digits.join(''));
      }
    }
  }
  return num;
};
console.log(maximumSwap(98))