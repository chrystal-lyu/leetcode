var hammingWeight = function(n) {
  let count = 0;
  while (n > 0) {
    count += (n & 1) == 1 ? 1 : 0;
    n = n >>> 1;
  }
  return count;
}
console.log(hammingWeight(11111111111111111111111111111101))