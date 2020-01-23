var combinationSum4 = function(nums, target) {
  let result = [];
  let subArr = [];
  nums = nums.sort((a,b) => {return a - b;})
  
  let helper = function (res, subArr, nums, target, start) {
    if (target < 0) return;
    if (target == 0) {
      res.push([...subArr]);
      return;
    }
    for (let i = start; i < nums.length && nums[i] <= target; i++) {
      subArr.push(nums[i]);
      helper(res, subArr, nums, target - nums[i], 0)
      subArr.pop();
    }
  }

  helper(result, subArr, nums, target, 0)
  return result.length;
};

combinationSum4([1,2,3],4)