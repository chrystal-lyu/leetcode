var subsets = function(nums) {
  const backtrack = function (nums, res, arr, start) {
    res.push([...arr]);
    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i]);
      backtrack(nums, res, arr, i+1)
      arr.pop();
    }
  }
  let res = [];
  nums = nums.sort((a,b) => { return a - b});
  backtrack(nums, res, [], 0)
  return res;
};
console.log(subsets([1,2,3]))