// 'abcd'
// 'abcde'
// return 'e'

var findTheDifference = function(s, t) {
  let arr = s.split('');
  arr.forEach(l => {
    t = t.replace(l,'');
  });
  return t;
};
