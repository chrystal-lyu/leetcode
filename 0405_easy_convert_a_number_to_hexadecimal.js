var toHex = function(num) {
  if (num == 0) return "0";
  let res = '';
  let digit = {
    0: '0', 1: '1', 2: '2', 3: '3', 4: '4',
    5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
    10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f'
  };
  if (num < 0) {
    num += Math.pow(2,32); 
  }
  while (num > 0) {
    let rem = (num/16 - Math.floor(num/16)) * 16
    res = digit[rem] + res;
    num = Math.floor(num/16);
  }
  return res;
};
