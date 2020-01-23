var combine = function(n, k) {
  const helper = function (nums, res, arr, start) {
    if (arr.length > k) return;
    if (arr.length == k) {
      res.push([...arr]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i]);
      helper(nums, res, arr, i+1);
      arr.pop();
    }
  }
  let res = [];
  let nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  helper(nums,res,[],0);
  return res;
};

console.log(combine(4,2))