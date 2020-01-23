// Remove Duplicates from Sorted Array II
var removeDuplicates = function(nums) {
  let count = 0;
  let lastSeen;
  for (let i=1; i<nums.length; i++) {
    if (nums[i] == nums[i-1] && count !== 2) {
      count = 2;
      lastSeen = nums[i];
    } else {
      if (nums[i] == lastSeen) {
        nums.splice(i,1);
        i--;
      } else {
        count = 0;
      }
    }
  }
  return nums;
}; 
console.log(removeDuplicates([-18,-17,-17,-17,-17,-16,-16,-16,-14]))
