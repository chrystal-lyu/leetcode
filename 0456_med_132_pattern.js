var find132pattern = function(nums) {
  if (nums.length < 3) return false;
  let stack = [];
  stack[0] = nums[0];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      for (let k = j+1; k < nums.length; k++) {
        if (nums[j] > nums[i] && nums[j] > nums[k]) {
          return true;
        }
      }
    }
  }
  return false;
};
find132pattern([1,3,2,4])