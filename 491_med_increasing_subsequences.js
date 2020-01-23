var findSubsequences = function(nums) {
  function dfs (nums, res, arr, start) {
    if (arr.length >= 2) {
      res.push([...arr]);
    }
    let used = new Set;
    for (let i = start; i < nums.length; i++) {
      if(used.has(nums[i])) continue;
      if (i > start && nums[i] === nums[i-1]) continue;
      if (nums[i] < arr[arr.length-1]) continue;
      used.add(nums[i]);
      arr.push(nums[i]);
      dfs(nums, res, arr, i+1);
      arr.pop();
    }
  }
  let res = [];
  dfs(nums, res, [], 0)
  return res;
};
findSubsequences([1,2,3,1,1,1])