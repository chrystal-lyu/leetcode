var intersect = function(nums1, nums2) {
  let res = [];
  while (nums2.length > 0) {
    let num = nums2.pop();
    let index = nums1.indexOf(num)
    if (index !== -1) {
      res.push(num);
      nums1.splice(index, 1);
    }
  }
  return res;
};