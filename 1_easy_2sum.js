// No. 1
var twoSum = function(nums, target) {
  let hashMap = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(target-nums[i])) {
      res[0] = i;
      res[1] = hashMap.get(target-nums[i]);
    } else {
      hashMap.set(nums[i], i);
    }
  }
  return res;
};

//No. 2
var twoSum = function(nums, target) {
  let hash = new Set();
  for (let num of nums) {
    hash.add(num);
  }
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (nums.indexOf(diff) !== i && hash.has(diff)) return [i, nums.indexOf(diff)];
  }
};

// No. 3
var twoSum = function(nums, target) {
  let result = [];
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[j] === target - nums[i]) {
        result.push(i, j)
      }
    }
  }
  return result
};
