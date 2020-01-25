// No. 1
var missingNumber = function(nums) {
  nums = nums.sort((a,b) => {return a - b});
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
};

// No. 2
var missingNumber = function(nums) {
  let n = nums.length;
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return (n*(1+n))/2 - sum;
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
// return 8


