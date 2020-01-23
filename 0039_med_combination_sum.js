var combinationSum = function(candidates, target) {
  const helper = function (res, arr, start, remain) {
    if (remain < 0) return;
    if (remain === 0) {
      res.push([...arr]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      arr.push(candidates[i]);
      helper(res, arr, i, remain-candidates[i]);
      arr.pop();
    }    
  }

  let res = [];
  helper(res, [], 0, target)
  return res;
};

console.log(combinationSum([2,3,6,7], 7))
