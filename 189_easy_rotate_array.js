var rotate = function(nums, k) {
  const reverse = function (arr,i,j) {
    while (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  let n = nums.length;
  k = k % n; 
  if (n == 0) return nums;
  reverse(nums, n-k, n-1)
  reverse(nums, 0, k)
  reverse(nums, 0, n-1); 
};
console.log(rotate([1,2],0))