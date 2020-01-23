var nextGreaterElements = function(nums) {
  let res = Array(nums.length).fill(-1);
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      let target = stack.pop();
      res[target] = nums[i];
    }
    stack.push(i);
  }

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length -1]]) {
      let target = stack.pop();
      res[target] = nums[i]
    }
  }
  return res;
};
nextGreaterElements([1,4,2,1,2])