// Input: [3,30,34,5,9]
// Output: "9534330"

var largestNumber = function(nums) {
  nums.sort((a,b) => {
    let ba = b.toString() + a.toString();
    let ab = a.toString() + b.toString();
    return ba - ab;
  });
  let res = nums.join('');
  return nums[0] == '0' ? 0 : res;
};
