var numSubarrayBoundedMax = function(A, L, R) {
  let res = 0;
  let count = 0;
  let j = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= L && A[i] <= R) {
      res += i - j + 1;
      count += i - j + 1;
    } else if (A[i] < L) {
      res += count;
    } else {
      j = i + 1;
      count = 0;
    }
  }
  return res;
};

numSubarrayBoundedMax([2, 1, 4, 3],2,3)