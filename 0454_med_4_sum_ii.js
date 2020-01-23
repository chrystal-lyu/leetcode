var fourSumCount = function(A, B, C, D) {
  let map = {};
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      sum = A[i] + B[j];
      map[sum] = (map[sum] || 0) + 1;
    }
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      sum = C[i] + D[j];
      count += map[-sum] || 0;
    }
  }

  return count;
};

console.log(fourSumCount([1, 2],[-2,-1],[-1, 2],[0, 2]));