// Example 1:
// Input: 100
// Output: "202"

// Example 2:
// Input: -7
// Output: "-10"

var convertToBase7 = function(num) {
  if (num < 0) return '-' + convertToBase7(-num);
  if (Math.floor(num/7) > 0) {
    return convertToBase7(Math.floor(num/7)) + (num%7).toString();
  } else {
    return (num%7).toString();
  }
};
