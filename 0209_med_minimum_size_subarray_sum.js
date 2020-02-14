var minSubArrayLen = function(s, nums) {
  if (nums.length == 0) return 0;
  let i = 0, j = 0, sum = 0, min = Number.MAX_VALUE;
  while (i < nums.length) {
    sum += nums[i++];
    while (sum >= s) {
      min = Math.min(min, i-j);
      sum -= nums[j++];
    }
  }
  return min == Number.MAX_VALUE ? 0 : min;
};

// 7, [2,3,1,2,4,3]
// return 2 -> [4,3]
