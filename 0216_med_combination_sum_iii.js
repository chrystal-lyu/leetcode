// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6], [1,3,5], [2,3,4]]

var combinationSum3 = function(k, n) {
  const backTracking = function (k, res, arr, remain, start) {
    if (remain < 0) return;
    if (arr.length == k && remain == 0) {
      res.push([...arr]);
      return;
    }
    for (let i = start; i <= n && i <= 9; i++) {
      arr.push(i);
      backTracking(k, res, arr, remain-i, i+1);
      arr.pop();
    }
  }
  let res = [];
  backTracking(k, res, [], n, 1);
  return res;
};
