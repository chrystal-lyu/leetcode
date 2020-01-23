var singleNumber = function(nums) {
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }
  return res;
};

singleNumber([4,1,2,1,2])

// Bitwise XOR
// 100 (4)
// 001 (1) --> 100 ^ 001 = 101
// 010 (2) --> 101 ^ 010 = 111
// 001 (1) --> 111 ^ 001 = 110
// 010 (2) --> 110 ^ 010 = 100 (4)

