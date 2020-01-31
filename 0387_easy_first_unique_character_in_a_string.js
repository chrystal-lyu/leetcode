// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

var firstUniqChar = function(s) {
  if (s.length == 0) return -1;
  if (s.length == 1) return 0;
  let map = {};
  s = s.split('');
  for (let l of s) {
    if (!map[l]) map[l] = 1
    else map[l]++;
  }
  for (let key in map) {
    if (map[key] == 1) return s.indexOf(key);
  }
  return -1;
};
