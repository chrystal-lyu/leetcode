var makesquare = function(nums) {
  function dfs (nums, sums, start, target) {
    if (start == nums.length) return true;

    for (let i = 0; i < 4; i++) {
      if(sums[i] + nums[start] <= target) {
        sums[i] += nums[start];
        if (dfs(nums, sums, start + 1, target)) return true;
        sums[i] -= nums[start];
      }
    }
    return false;
  }

  if (nums.legnth < 4) return false;
  let sum = 0;
  for (num of nums) sum += num;
  if (sum % 4 !== 0) return false;
  let sums = Array(4).fill(null);
  return dfs(nums, sums, 0, sum/4);
};
console.log(makesquare([1,1,2,2,2]))