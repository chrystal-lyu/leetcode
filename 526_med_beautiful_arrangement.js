var countArrangement = function(N) {
  function backtracking(nums, arr, res, id) {
    if (arr.length === nums.length) {
      res.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) continue;
      if (nums[i] % id == 0 || id % nums[i] == 0){
        arr.push(nums[i]);
        backtracking(nums, arr, res, id+1)
        arr.pop();
      }
    }
  }
  let res = [];
  let nums = Array(N);
  for (let i = 0; i < N; i++) {
    nums[i] = i+1;
  }
  backtracking(nums, [], res, 1);
  return res.length;
};
countArrangement(5);