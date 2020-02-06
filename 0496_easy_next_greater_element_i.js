var nextGreaterElement = function(nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    let j = nums2.indexOf(nums1[i]);
    for (j; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        res.push(nums2[j]);
        break;
      } else if (j == nums2.length-1) {
        res.push(-1);
      }
    }
  }
  return res;
};

// nums1 = [4,1,2]
// nums2 = [1,3,4,2]

// res = [-1,3,4]
