var intersection = function(nums1, nums2) {
  let res = [];
  let set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j] && !set.has(nums1[i])) {
        set.add(nums1[i]);
        res.push(nums1[i]);
      }
    }
  }
  return res;
};