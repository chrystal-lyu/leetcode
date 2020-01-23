var isHappy = function(n) {
  if (n == 0) return false;
  if (n == 1) return true;
  
  const digitSquareSum = function(n) {
    let sum = 0;
    while (n > 0) {
      let digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    return sum;
  }
  
  let slow = n;
  let fast = digitSquareSum(n);
  
  while (slow !== fast) {
    slow = digitSquareSum(slow)
    fast = digitSquareSum(digitSquareSum(fast));
    if (fast == 1) return true;
  }
  return false;
};
console.log(isHappy(11));