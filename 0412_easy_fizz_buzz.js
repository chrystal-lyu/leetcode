// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number 
// and for the multiples of five output “Buzz”. 
// For numbers which are multiples of both three and five output “FizzBuzz”.

var fizzBuzz = function(n) {
  let res = [];
  let i = 1;
  while (i <= n) {
    if (i % 3 == 0 && i % 5 == 0) res.push('FizzBuzz');
    else if (i % 3 == 0) res.push('Fizz');
    else if (i % 5 == 0) res.push('Buzz');
    else res.push(i+'');
    i++;
  }
  return res;
};
