var findTargetSumWays = function(nums, S) {
  function dfs (nums, sum, start, target) {
    if (start == nums.length) {
      console.log(sum)
      if (target == sum) count++;
      return;
    }
    dfs(nums, sum + nums[start], start + 1, target);
    dfs(nums, sum - nums[start], start + 1, target);
  }  
  let count = 0;
  dfs(nums, 0, 0, S);
  return count;
};
console.log(findTargetSumWays([], 3));
