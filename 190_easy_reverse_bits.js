var reverseBits = function(n) {
  if ( n == 0) return 0;
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res *= 2
    res += n & 1;
    n >>= 1
  }
  return res;
};

console.log(reverseBits(00000010100101000001111010011100))