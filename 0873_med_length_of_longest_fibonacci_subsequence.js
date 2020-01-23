var lenLongestFibSubseq = function(A) {
  let ans = 0;
  let set = new Set;
  for (let num of A) {
    set.add(num)
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = i+1; j < A.length; j++) {
      let x = A[j],
          y = A[i] + A[j];
      let length = 2;
      while (set.has(y)) {
        let temp = y;
        y += x;
        x = temp;
        length++;
        ans = Math.max(ans, length)
      }
    }
  }
  return ans >= 3 ? ans : 0;
};
lenLongestFibSubseq([1,3,7,11,12,14,18]);