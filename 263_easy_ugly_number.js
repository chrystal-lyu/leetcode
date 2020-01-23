var isUgly = function(num) {
  if (num <= 0) return false;
  for (let i of [2,3,5]) {
    while (num % i == 0) {
      num /= i;
    }
  }
  return num === 1;
};
console.log(isUgly(100))