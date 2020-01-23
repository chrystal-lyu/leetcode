var simplifyPath = function(path) {
  path = path.split('/');
  let stack = [];
  let res = '';
  for (let i = 0; i < path.length; i++) {
    if (path[i].length && path[i] != ".") {
      if (path[i] == '..') {
        stack.pop();
      } else {
        stack.push(path[i])
      }
    }
  }
  for (let p of stack) {
    res += '/' + p;
  }
  return stack.length === 0 ? '/' : res;
};

console.log(simplifyPath('/../'))