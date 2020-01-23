var longestMountain = function(A) {
  let max = 0;
  let i = 1;
  while (i < A.length) {
    let up = 0;
    let down = 0;
    while (A[i-1] < A[i]) {
      up++;
      i++;
    }
    while (A[i-1] > A[i]) {
      down++;
      i++;
    }
    while (A[i-1] == A[i]) i++;
    
    if (up > 0 && down > 0) {
      max = Math.max(max, up + down + 1);
    }
  }
  console.log(max)
  return max;
};
longestMountain([2,1,4,7,3,2,5])