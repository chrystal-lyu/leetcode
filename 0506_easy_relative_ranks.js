var findRelativeRanks = function(nums) {
  let n = nums.length;
  let sort = [...nums]
  sort = sort.sort((a,b) => {return b - a});
  for (let i = 0; i < n; i++) {
    let index = nums.indexOf(sort[i]);
    if (i == 0) {
      nums[index] = 'Gold Medal'
    } else if (i == 1) {
      nums[index] = 'Silver Medal'
    } else if (i == 2) {
      nums[index] = 'Bronze Medal'
    } else {
      nums[index] = (i+1).toString();
    }
  }
  return nums;
};
