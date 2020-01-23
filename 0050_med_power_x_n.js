
// Implement pow(x, n), which calculates x raised to the power n (xn).

var myPow = function(x, n) {
  if (n == 0) return 1;
  if (n < 0) { 
    return  1 / myPow(x, -n);
  }
  let half = myPow(x, Math.floor(n/2))
  if (n % 2 == 0) {
    return half * half;
  } else {
    return x * half* half;
  }
};

console.log(myPow(2,10))
