var hammingDistance = function(x, y) {
  let res = x ^ y;
  str = res.toString(2);
  let ans = 0;
  for (let s of str) {
    if (s === '1') ans++;
  }
  return ans;
};
