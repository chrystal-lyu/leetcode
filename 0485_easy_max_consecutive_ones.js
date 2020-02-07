var findMaxConsecutiveOnes = function(nums) {
  let res = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      max++ 
    } else {
      max = 0;
    }
    res = Math.max(res, max);
  }
  return res;
};
