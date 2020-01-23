// No. 1
var trailingZeroes = function(n) {
  let res = 0;
  while (n > 0) {
    res += Math.floor(n/5);
    n /= 5;
  }
  return res;
};

// No. 2
var trailingZeroes = function(n) {
  if (n < 5) return 0;
  if (n < 10) return 1;
  return Math.floor(n/5) + trailingZeroes(n/5)
}