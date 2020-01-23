var combinationSum2 = function(candidates, target) {
  const dfs = function(res, arr, remain, start) {
    if (remain < 0) return;
    if (remain === 0) {
      res.push([...arr]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] == candidates[i-1]) {
        continue;
      }
      arr.push(candidates[i]);
      dfs(res, arr, remain-candidates[i], i+1);
      arr.pop();
    }
  }
  let res = [];
  candidates.sort((a,b) => {return a - b})
  dfs(res, [], target, 0)
  return res;
};

console.log(combinationSum2([1,1,1,2],3));
