var mySqrt = function(x) {
  let start = 0;
  let end = x;

  while (start <= end) {
    let mid = Math.floor((start + end)/2);
    if (mid * mid == x) {
      return mid;
    } else if (mid * mid < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
}

console.log(mySqrt(81))