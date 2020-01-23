var numSubarrayProductLessThanK = function(nums, k) {
  let prod = 1,
      count = 0;
  for (let i = 0, j = 0; j < nums.length; j++) {
    prod *= nums[j]
    while (i < j && prod >= k) {
      prod /= nums[i]
      i++
    }
    count += j - i + 1;
  }
  return count;
};
numSubarrayProductLessThanK([10, 5, 2, 6], 100)