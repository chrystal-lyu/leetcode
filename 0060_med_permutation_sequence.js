var getPermutation = function(n, k) {
  let nums = [];
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    nums.push(i.toString());
  }
  for (let j = 2; j < n; j++) {
    factorial *= j;
  }
  let ans = '';
  k--;
  while (n--) {
    let index = Math.floor(k/factorial);
    ans += nums[index];
    k %= factorial;
    factorial /= n;
    nums.splice(index, 1)
  }
  return ans;
};
console.log(getPermutation(9,1000))