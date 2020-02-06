var reverseWords = function(s) {
  s = s.split(' ').filter((item) => item.length > 0);
  s = s.reverse();
  return s.join(' ');
};
