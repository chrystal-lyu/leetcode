// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]

var productExceptSelf = function(nums) {
  let n = nums.length;
  let left = [1];
  for (let i = 1; i < n; i++) {
    left[i] = left[i-1] * nums[i-1];
  }
  let right = [];
  right[n-1] = 1;
  for (let i = n-2; i >= 0; i--) {
    right[i] = right[i+1] * nums[i+1];
  }
  let res = [];
  for (let i = 0; i < n; i++) {
    res[i] = left[i] * right[i];
  }
  return res;
}

// left = [1,1,2,6]
// right = [24,12,4,1]
