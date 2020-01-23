var nextGreaterElement = function(n) {
  let arr = n.toString().split('');
  let i = -1;
  for (i = arr.length - 1; i > 0; i--) {
    if (arr[i-1] < arr[i]) {
      break;
    }
  }
  if (i == 0) { return -1 };
  let minIdx = i - 1;
  for (let i = arr.length - 1; i > minIdx; i--) {
    if (arr[i] > arr[minIdx]) {
      let temp = arr[i];
      arr[i] = arr[minIdx]
      arr[minIdx] = temp;
      break;
    }
  }

  function reverse (nums, start) {
    let end = nums.length - 1;
    while (start < end) {
      let temp = nums[end];
      nums[end] = nums[start];
      nums[start] = temp;
      start++;
      end--;
    }
    return nums;
  }
  reverse(arr, minIdx+1)
  let res = parseInt(arr.join(''));
  return res < 2147483648 ? res : -1;
};
console.log(nextGreaterElement(1999999999));
