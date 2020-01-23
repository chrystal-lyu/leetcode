var arrayNesting = function(nums) {
  let max = 0;
  let set = new Set;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i])
      let target = nums[i];
      let arr = [target];
      while (nums[target] !== arr[0]) {
        arr.push(nums[target]);
        set.add(nums[target]);
        target = nums[target];
      }
      max = Math.max(max, arr.length)
    } else {
      continue;
    }    
  }
  return max;
};
arrayNesting([5,4,0,3,1,6,2])