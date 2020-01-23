var search = function(nums, target) {
  let l = 0,
      r = nums.length - 1;
  while (l < r) {
    let m = Math.floor((l+r)/2);
    if (nums[m] == target) return true;
    else if (nums[m] < nums[r])
      if (nums[m] < target && target <= nums[r])
        l = m + 1;
      else 
        r = m - 1;
    else if (nums[l] < nums[m]) 
      if (nums[l] <= target && target < nums[m])
        r = m - 1;
      else 
        l = m + 1;
    else
      if (nums[l] == nums[m]) l++;
      if (nums[r] == nums[m]) r--;
  }
  return nums[l] == target ? true : false;
};

console.log(search([2,5,6,0,0,1,2],0))