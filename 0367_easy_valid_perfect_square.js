var isPerfectSquare = function(num) {
  if (num == 1) return true;
  let start = 0;
  let end = num;
  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    let square = mid * mid;
    if (square === num) {
      return true;
    } else if (square > num) {
      end  = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};
