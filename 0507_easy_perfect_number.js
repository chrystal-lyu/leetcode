var checkPerfectNumber = function(num) {
  if (num == 0) return false;
  if (num == 1) return false;
  let sum = 0;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      sum += i + num/i;
    }
  }
  sum++;
  return num === sum;
};
