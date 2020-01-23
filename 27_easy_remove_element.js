var removeElement = function(nums, val) {
  let m = 0;
  let n = nums.length-1;
  while (m <= n) {
    if (nums[m] == val) {
      nums[m] = nums[n];
      n--;
    } else {
      m++;
    }
  }
  return m;
};

// remove in place
