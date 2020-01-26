// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true

// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false

var wordPattern = function(pattern, str) {
  let map = {};
  pattern = pattern.split('');
  str = str.split(' ');
  if (pattern.length !== str.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    let c = pattern[i];
    if (map[c]) {
      if (map[c] !== str[i]) return false;
    } else {
      if (Object.values(map).includes(str[i])) {
        return false;
      }
      map[c] = str[i];
    }
  }
  return true;
};

