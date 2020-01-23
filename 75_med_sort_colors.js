var sortColors = function(A) {
  let map = {};
  for (let c of A) {
    if (map[c]) map[c]++
    else map[c] = 1;
  }
  let index = 0;
  for (let key in map) {
    for (let i=0; i<map[key]; i++) {
      A[index++] = parseInt(key);
    }
  }
};

var sortColors = function(A) {
  const swap = function (i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  }
  let n = A.length;
  let p1 = 0, p2 = n-1, k = 0;
  while (k <= p2) {
    if (A[k] == 0) {
      swap(k, p1);
      p1++
    } 
    if (A[k] == 2) {
      swap(k, p2);
      p2--;
      k--;
    }
    k++;
  }
}

console.log(sortColors([2,0,2,1,1,0]))