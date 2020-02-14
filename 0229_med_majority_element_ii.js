// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Note: The algorithm should run in linear time and in O(1) space.

// Example 1:

// Input: [3,2,3]
// Output: [3]
// Example 2:

// Input: [1,1,1,3,3,2,2,2]
// Output: [1,2]

var majorityElement = function(nums) {
  if (nums.length == 0) return [];
  let n = nums.length;
  let count = Math.floor(n/3);
  let res = [];
  let map = {};
  for (let num of nums) {
    if (!map[num]) map[num] = 1;
    else map[num]++;
  }
  for (let key in map) {
    if (map[key] > count) res.push(parseInt(key));
  }
  return res;
};
