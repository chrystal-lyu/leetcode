var findMaxLength = function(nums) {
  let max = 0,
      sum = 0,
      map = new Map;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) nums[i] = -1;
  }
  map.set(0,0)
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum)) {
      max = Math.max(max, i-map.get(sum))  
    } else {
      map.set(sum, i)
    }
  }
  return max;
};
findMaxLength([1,0])

// [0,0,1,0,0,0,1,1]
