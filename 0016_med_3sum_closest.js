// No. 1
var threeSumClosest = function(nums, target) {
  nums.sort(function(a, b){return a - b});
  
  let diff = Infinity;
  let sum =0;

  for (let i = 0; i < nums.length; i++) {
    let lo = i + 1;
    let hi = nums.length - 1;
    while (lo < hi) {
      if (Math.abs(nums[i] + nums[lo] + nums[hi] - target) < diff) {
        sum = nums[i] + nums[lo] + nums[hi]
        diff = Math.abs(target - sum)
      }
      if (nums[i] + nums[lo] + nums[hi] > target) {
        hi--;
      } else {
        lo++;
      }
    }
  }
  
  return sum;
};

console.log(threeSumClosest([-1,2,1,-4],1))

// No. 2
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a,b) => {return a - b});

  let res = nums[0] + nums[1] + nums[nums.length-1];

  for (let i = 0; i < nums.length-2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > target) {
        k--
      } else {
        j++
      }
      if (Math.abs(sum-target) < Math.abs(res-target)) {
        res = sum;
      }
    }
  }
  return res;
};
