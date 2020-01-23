var maxSubArray = function(nums) {
  let maxSoFar = nums[0],
      maxEndHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndHere = Math.max(maxEndHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndHere);
  }
  return maxSoFar;
};