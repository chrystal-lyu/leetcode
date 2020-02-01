var compress = function(chars) {
  let indexAns = 0, index = 0;
  while (index < chars.length) {
    let count = 0;
    let currChar = chars[index];
    while (currChar == chars[index]) {
      count++;
      index++;
    }
    chars[indexAns++] = currChar;
    if (count > 1) {
      for (let c of count.toString().split('')) {
        chars[indexAns++] = c;
      }
    }
  }
  return indexAns;
};

// Iterating through array chars, starting with index = 0
// Mark down the value and the count of current character (e.g. 'a', 2)
// While character equals the current character, count++
// If reach a char that is not 'a' then exit the inner while loop
// Start placing result onto array chars
// Whenever count is greater than 1, we need to place them in array chars too digit by digit
// Now keep iterating for the next different character...