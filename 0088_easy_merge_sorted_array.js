var merge = function(A, m, B, n) {
  let i = m-1,
      j = n-1,
      k = m+n-1;
  for (k; k >= 0;k--) {
    if (i < 0) {
      A[k] = B[j--];
    } else if (j < 0) {
      break;
    } else if (A[i] > B[j]) {
      A[k] = A[i--];
    } else {
      A[k] = B[j--];
    }
  }
}

console.log(merge([0],0,[1],1))