// Input: "Hello, my name is John"
// Output: 5
var countSegments = function(s) {
  s = s.split('')
  let res = 0;
  for (let i of s) {
    if (i.length) res++
  }
  return res;
};
