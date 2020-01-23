var nextPermutation = function(nums) {
  const swap = function (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  const reverse = function (arr, i, j) {
    while (i < j) {
      swap(arr, i++, j--);
    }
  }
  
  if (nums.length <= 1) return;

  let i = nums.length - 2;                    // start from second last index
  while (i >= 0 && nums[i] >= nums[i+1]) i--; // mark the first decreasing number index as i
  if (i >= 0) {                               // for cases not entirely descending
    let j = nums.length-1;                    // start from last index
    while (nums[j] <= nums[i]) j--;           // find the first number index larger than nums[i] as j
    swap(nums, i, j)                          // swap nums[i] and nums[j]
  }
  reverse(nums, i+1, nums.length-1);          // reverse the segment from index i+1 to the end
}

nextPermutation([3,2,1]);

// 1, 2, 3 -> 1, 3, 2
// 3, 2, 1 -> 1, 2, 3
// 1, 1, 5 -> 1, 5, 1
// 1, 5, 1 -> 5, 1, 1