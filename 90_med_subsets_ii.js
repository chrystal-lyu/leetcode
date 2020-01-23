var subsetsWithDup = function(nums) {
  nums.sort((a,b) => {return a - b});
  const findSet = function(res, arr, start, nums) {
    res.push([...arr]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] == nums[i-1]) continue;
      arr.push(nums[i]);
      findSet(res, arr, i+1, nums);
      arr.pop();
    }
  }
  let res = [];
  findSet(res, [], 0, nums);
  return res;
};
console.log(subsetsWithDup([1,2,2]));
