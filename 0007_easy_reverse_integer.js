var reverse = function(x) {
  let res = "";
  let negative = x < 0 ? -1 : 1;
  
  if (x === 0) return 0;
  
  x = Math.abs(x).toString().split('');

  let i = x.length-1;
  while (i >= 0) {
    if (x[i] !== "0") {
      break;
    } else {
      i--;
    }
  }

  for (let j = i; j >= 0; j--) {
    res += x[j]
  }
  
  if (parseInt(res) > Math.pow(2, 31)) return 0;
  
  return parseInt(res)*negative;
};