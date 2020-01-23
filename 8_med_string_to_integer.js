var myAtoi = function(str) {
  let int_max = 2147483647;
  let int_min = -2147483648;
  let start = 0, index = 0, n = str.length;
  let negative = false;
  while (index < n && str.charAt(index) == ' ') {
    ++index;
  }
  
  if (index === n) return 0;
  
  if (str.charAt(index) == '+') {
    ++index;
  } else if (str.charAt(index) == '-') {
    ++index;
    negative = true;
  }
  
  while (index < n && str.charAt(index) == '0') {
    ++index
  }

  start = index;
  
  while (index < n && str.charAt(index) >= '0' && str.charAt(index) <= '9') {
    ++index;
  }
  
  if (index == start) return 0;
  
  if (index - start > 10) {
    return negative ? int_min : int_max;
  }
  
  let num = 0;
  for (let i = start; i < index; i++) {
    num = num * 10 + (str.charAt(i) - '0')
  }
  
   num = negative ? -num : num;
  
  if (num > int_max) {
    return int_max
  } else if (num < int_min) {
    return int_min
  }
  
  return num;
};

console.log(myAtoi("2147483648"))