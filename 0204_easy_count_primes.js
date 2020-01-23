var countPrimes = function(n) {
  if (n < 2) return 0;
  let prime = new Array(n).fill(true);
  let count = 0;
  prime[0] = false;
  prime[1] = false;
  for (let i = 2; i < n; i++) {
    if (prime[i] == true) {
      count++;
      for (let j = 2; i*j < n; j++) {
        prime[i*j] = false;
      }
    }
  }
  return count;
};

console.log(countPrimes(100));
// 2,3,5,7