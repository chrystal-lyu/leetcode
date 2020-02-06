var findPeakElement = function(nums) {
  let start = 0;
  let end = nums.length-1;
  while (start < end) {
    let m = Math.floor((start+end)/2);
    if (nums[m] < nums[m+1]) {
      start = m+1;
    } else {
      end = m;
    }
  }
  return start;
};

// [1,2,1,3,5,6,4]
//  0 1 2 3 4 5 6
// should return either 1 or 5 (for 2 and 6 peaks)