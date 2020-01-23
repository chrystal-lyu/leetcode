var canJump = function(nums) {
  let n = nums.length;
  let last = n - 1;
  let i = n - 2;
  for (i; i >= 0; i--) {
    if (i+nums[i] >= last) last = i;
  }
  return last == 0;
};
console.log(canJump([2,3,1,1,4]))