// Input:  [0,1,2,4,5,7]

// Output: ["0->2","4->5","7"]

var summaryRanges = function(nums) {
  let res = [];
  if (nums.length == 0) return [];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let j = i;
    let str = "";
    while (i < n-1 && nums[i+1]-nums[i]==1) {
      i++;
    }
    if (i !== j) {
      str = ""+nums[j]+"->"+nums[i];
    } else {
      str = ""+nums[i];
    }
    res.push(str);
  }
  return res;
};
