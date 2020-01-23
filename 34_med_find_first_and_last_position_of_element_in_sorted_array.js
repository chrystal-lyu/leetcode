var searchRange = function(nums, target) {
  let res = [];
  let lo = 0;
  let hi = nums.length-1;
  while (lo <= hi) {
    let mid = Math.floor((lo+hi)/2);
    if (target === nums[mid]) {
      let start = mid;
      let end = mid;
      while (start >= 0) {
        if (nums[start] === target) {
          start--;
        } else {
          break;
        }
      }
      while (end <= hi) {
        if (nums[end] === target) {
          end++
        } else {
          break;
        }
      }
      res = [start+1, end-1];
      return res;
    } else if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return [-1,-1];
}
console.log(searchRange([5,7,7,8,8,10],5))