var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 1; j < nums.length;) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      i++;
      nums[i] = nums[j];
      j++;
    }
  }
  return i+1;
};
console.log(removeDuplicates([1,1,2,2,2,3]))
