// Input:  [1,2,1,3,2,5]
// Output: [3,5]

var singleNumber = function(nums) {
  let set = new Set();
  let res = [];
  for (let num of nums) {
    let i = res.indexOf(num);
    if (!set.has(num)) {
      set.add(num);
      res.push(num);
    } else {
      res.splice(i,1);
    }
  }
  return res;
};
