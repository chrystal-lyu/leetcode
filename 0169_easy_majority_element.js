var majorityElement = function(nums) {
  let n = nums.length;
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if(map[nums[i]]) {
      map[nums[i]]++
      if (map[nums[i]] >= n/2) return nums[i];
    } else {
      map[nums[i]] = 1;
    }
  }
};
