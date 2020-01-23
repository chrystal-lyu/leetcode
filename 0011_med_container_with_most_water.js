// No. 1 (slow)
var maxArea = function(height) {
  let res = Number.MIN_VALUE;
  for (let i = 0; i < height.length; i++) {
    for (let j = i+1; j < height.length; j++) {
      let h = Math.min(height[i], height[j]);
      let w = j - i
      res = Math.max(res, h*w)
    }
  }
  return res;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))

// No. 2 (fast)
var maxArea = function(height) {
  let res = Number.MIN_VALUE;
  for (let i = 0, j = height.length-1; i < j;) {
    let w = j - i;
    let h = Math.min(height[i], height[j]);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
    res = Math.max(res, w * h)
  }
  return res;
};