var findMin = function(nums) {
  let start = 0, end = nums.length-1;
  if (nums[end] > nums[start]) return nums[0];
  while (start < end) {
    let mid = Math.floor((start+end)/2);
    if (nums[mid] > nums[mid+1]) return nums[mid+1];
    if (nums[mid] < nums[mid-1]) return nums[mid];
    if (nums[mid] > nums[start]) {
      start = mid+1;
    } else {
      end = mid;
    }
  }
  return nums[start];
};
