// Example:

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", 
// whose length is 7.

var longestPalindrome = function(s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    let l = s.charAt(i)
    if (!map[l]) map[l] = 1;
    else map[l]++;
  }
  let odd = false;
  let res = 0;
  for (let key in map) {
    if (map[key] % 2 === 0) {
      res += map[key];
    } else {
      odd = true;
      res += (map[key]-1)
    }
  }
  return odd ? res + 1 : res;
};
