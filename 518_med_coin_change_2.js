var change = function(amount, coins) {
  function backtracking (res, nums, remain, start, arr) {
    if (remain < 0) return;
    if (remain == 0) {
      res.push([...arr])
    }
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] == nums[i-1]) continue;
      arr.push(nums[i]);
      backtracking(res, nums, remain-nums[i], start, arr);
      arr.pop();
    }
  }
  let res = [];
  backtracking(res, coins, amount, 0, []);
  return res;
};
change(5, [1,2,5]);