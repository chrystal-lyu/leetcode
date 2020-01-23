var search = function(nums, target) {
  let lo = 0,
      hi = nums.length-1;
  while (lo < hi) {
    let mid = Math.floor((lo+hi)/2);
    if (nums[mid] > nums[hi]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  let start = lo;
  lo = 0;
  hi = nums.length-1;
  if (target >= nums[start] && target <= nums[hi]) {
    lo = start;
  } else {
    hi = start;
  }

  while(lo < hi) {
    let mid = Math.floor((lo+hi)/2);
    if (target === nums[mid]) return nums[mid];
    if (target > nums[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return -1;
};
search([4,5,6,7,0,1,2],5);

// [4,5,6,7,0,1,2]
//        ^
