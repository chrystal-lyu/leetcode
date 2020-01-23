var maxRotateFunction = function(A) {
  function calcVal (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += i * arr[i];
    }
    return total;
  }

  let max = -Infinity;
  for (let i  = 0; i < A.length; i++) {
    max = Math.max(max, calcVal(A))
    let last = A.pop();
    A.unshift(last);
  }
  return max;
};
maxRotateFunction([4,3,2,6,1,2,3,4,0])