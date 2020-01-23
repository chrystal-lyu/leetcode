var permute = function(nums) {
  const dfs = function (res, arr) {
    if (arr.length == nums.length) {
      res.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) continue;
      arr.push(nums[i]);
      dfs(res, arr);
      arr.pop();
    }
  }
  let res = [];
  dfs(res, []);
  return res;
};

console.log(permute([1,2,3]))
