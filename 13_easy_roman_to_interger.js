var romanToInt = function(s) {
  let sum = 0;

  if (s.indexOf('IV') !== -1) sum -= 2;
  if (s.indexOf('IX') !== -1) sum -= 2;
  if (s.indexOf('XL') !== -1) sum -= 20;
  if (s.indexOf('XC') !== -1) sum -= 20;
  if (s.indexOf('CD') !== -1) sum -= 200;
  if (s.indexOf('CM') !== -1) sum -= 200;
  
  s = s.split('');
  
  for (let letter of s) {
    if (letter === 'I') sum += 1;
    if (letter === 'V') sum += 5;
    if (letter === 'X') sum += 10;
    if (letter === 'L') sum += 50;
    if (letter === 'C') sum += 100;
    if (letter === 'D') sum += 500;
    if (letter === 'M') sum += 1000;
  }
  
  return sum;
};
