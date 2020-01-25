// No. 1 Recursive 
// Time complexity: O(log n)
var isPowerOfTwo = function(n) {
  if (n == 1) return true;
  if (n%2 !== 0 || n == 0) return false
  return isPowerOfTwo(n/2)
};

// No. 2 Iterative
// Time complexity: O(log n)
var isPowerOfTwo = function(n) {
  if (n == 0) return false;
  while (n%2 == 0) {
    n /= 2
  }
  return n == 1;
};
