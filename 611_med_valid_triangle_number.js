var triangleNumber = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if ((nums[i]+nums[j])>nums[k]
        && (nums[j]+nums[k])>nums[i]
        && (nums[k]+nums[i])>nums[j]) {
          count++
        }
      }
    }
  }
  return count;
};
triangleNumber([2,2,3,4])