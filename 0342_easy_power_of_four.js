// No. 1
var isPowerOfFour = function(num) {
  if (num < 1) return false;
  num = Math.sqrt(num);
  if (num % 1 !== 0) return false;
  while (num % 2 == 0) {
    num /= 2;
  }
  return num == 1;
};

// No. 2
var isPowerOfFour = function(num) {
  if (num < 1) return false;
  while (num % 4 == 0) {
    num /= 4;
  }
  return num == 1;
};
