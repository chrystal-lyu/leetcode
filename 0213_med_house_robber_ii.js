var rob = function(nums) {
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  const _rob = function (nums, start, end) {
    let pre = 0, cur = 0;
    for (let i = start; i < end; i++) {
      let temp = Math.max(pre+nums[i], cur);
      pre = cur;
      cur = temp;
    }
    return cur;
  }
  let n = nums.length;
  return Math.max(_rob(nums,0,n-1), _rob(nums,1,n));
};
