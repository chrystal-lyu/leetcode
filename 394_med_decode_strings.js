var decodeString = function(s) {
  let stack = [];
  let count = 0;
  let result = '';
  for (let c of s) {
    if (c === "[") {
      stack.push(result);
      stack.push(count);
      count = 0;
      result = '';
    } else if (c === "]") {
      let times = stack.pop();
      let prevStr = stack.pop();
      result = prevStr + result.repeat(parseInt(times));
    } else if (parseInt(c)) {
      count = count * 10 + parseInt(c);
    } else {
      result += c;
    }
  }
  return result;
};

decodeString("3[a]2[bc4[d]]");