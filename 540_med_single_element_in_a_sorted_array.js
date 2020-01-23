var singleNonDuplicate = function(nums) {
  let start = 0,
      end = nums.length - 1;
  while(start < end) {
    let mid = Math.floor((start + end) / 2);
    if (mid % 2 == 0) mid = mid + 1;
    if (nums[mid] == nums[mid + 1]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return nums[start];
};
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));