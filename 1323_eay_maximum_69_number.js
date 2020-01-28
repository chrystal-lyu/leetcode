var maximum69Number  = function(num) {
  num = num.toString();
  num = num.split('');
  for (let i = 0; i < num.length; i++) {
    if (num[i] === '6') {
      num[i] = '9';
      break;
    }
  }
  return parseInt(num.join(''));
};
