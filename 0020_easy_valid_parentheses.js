var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  let pairs = {
    ")" : "(",
    "}" : "{",
    "]" : "["
  };

  let stack = [];
  
  for(let i=0; i<s.length; i++) {
    let current = s[i]
    let top = stack[stack.length-1]

    if(current == ")" || current == "]" || current == "}") {
      if (pairs[current] === top) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(current);
    }
  }
  return stack.length === 0;
}

console.log(isValid("[{]}"));
