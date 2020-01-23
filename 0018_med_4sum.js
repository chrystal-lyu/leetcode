var fourSum = function(nums, target) {
  nums = nums.sort((a,b) => { return a - b });
  let res = [];
  if (nums.length < 4) return res;
  
  for (let i = 0; i < nums.length-3; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue;
    let _target = target - nums[i];
    
    for (let j = i + 1; j < nums.length-2; j++) {
      if (j > i+1 && nums[j] === nums[j-1]) continue;
      
      for (let lo = j+1, hi = nums.length-1; lo < hi;) {
        let sum = nums[j] + nums[lo] + nums[hi];
        
        if (sum < _target) {
          lo++;
        } else if (sum > _target) {
          hi--;
        } else {
          res.push([nums[i],nums[j],nums[lo],nums[hi]])
          while (lo < hi && nums[lo] === nums[lo+1]) lo++;
          while (lo < hi && nums[hi] === nums[hi-1]) hi--;
          lo++;
          hi--;
        }
        
      }
    }
  }
  return res;
};

fourSum([1, 0, -1, 0, -2, 2],0)