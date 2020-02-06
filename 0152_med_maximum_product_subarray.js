var maxProduct = function(nums) {
  let max = nums[0];
  let min = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      max = Math.max(nums[i], max*nums[i]);
      min = Math.min(nums[i], min*nums[i]);
    } else {
      let lastMax = max;
      max = Math.max(nums[i], min*nums[i]);
      min = Math.min(nums[i], lastMax*nums[i]);
    }
    res = Math.max(res, max);
  }
  return res;
};


//[2,3,-2,4]
// 2x3 = 6 is the maximum product
