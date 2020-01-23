// Given an array of integers and an integer k, 
// find out whether there are two distinct indices
// i and j in the array such that nums[i] = nums[j] 
// and the absolute difference between i and j is at most k.

// No. 1
// var containsNearbyDuplicate = function(nums, k) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       console.log(i, j)
//       if (nums[i] == nums[j] && Math.abs(i-j) <= k) return true;
//     }
//   }
//   return false;
// };

// No. 2
var containsNearbyDuplicate = function(nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] >= 0 && (i-map[nums[i]]) <= k) return true;
    map[nums[i]] = i;
  }
  return false;
};
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))