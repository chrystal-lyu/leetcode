var addDigits = function(num) {
  let sum = 0;
  while (num >= 10) {
    sum += num % 10;
    num = Math.floor(num/10)
    if (num < 10) {
      num += sum;
      sum = 0;
    }
  }
  return num;
};
console.log(addDigits(387))

// While number(e.g. 387) >= 10 take each digit (3,8,7) and adds to sum
// When it reaches the last digit, number becomes new number (3+8+7=18)
// New number (18) is still >= 10 therefore keep running the while loop 
// 18 becomes 1+8 = 9 which is less than 10. While loop ends. Return 9