var permuteUnique = function(nums) {
  const dfs = function (res, arr, seen) {
    if (arr.length == nums.length) {
      res.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (seen[i]) continue;
      if (i > 0 && nums[i] == nums[i-1] && !seen[i-1]) continue;
      seen[i] = true;
      arr.push(nums[i]);
      dfs(res, arr, seen);
      seen[i] = false;
      arr.pop();
    }
  }
  let res = [];
  let seen = new Array(nums).fill(false);
  nums.sort((a,b) => {return a - b});
  dfs(res, [], seen);
  return res;
};

console.log(permuteUnique([1,1,2]))