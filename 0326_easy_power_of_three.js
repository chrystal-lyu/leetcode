// No. 1
var isPowerOfThree = function(n) {
  while (n > 1) {
    if (n % 3 !== 0) return false;
    n /= 3
  }
  return n == 1;
};

// No. 2
var isPowerOfThree = function(n) {
  if (n < 1) return false;
  while (n % 3 == 0) {
    n /= 3;
  }
  return n == 1;
};

// No. 3 No loop or recursion
var isPowerOfThree = function(n) {
  return Math.log10(27)/Math.log10(3) % 1 == 0;
}
