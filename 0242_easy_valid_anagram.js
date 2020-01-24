// Given two strings s and t , write a function to determine if t is an anagram of s.

// Input: s = "anagram", t = "nagaram"

// Output: true

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  if (s.length == 0 && t.length == 0) return true;

  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s.charAt(i))) {
      map.set(s.charAt(i), 1);
    } else {
      let count = map.get(s.charAt(i));
      map.set(s.charAt(i), count+1)
    }
  }

  for (let i = 0; i < t.length; i++) {
    let count = map.get(t.charAt(i));
    if (map.has(t.charAt(i)) && count > 0) {
      map.set(t.charAt(i), count-1);
    } else {
      return false;
    }
  }

  return true;
};

console.log(isAnagram('rat','car'))

// Use hashmap to map out the count of each letter in word s in Map
// Check each letter in word t, if there's a match and available count for that letter (count > 0),
// Subtract from the corresponding letter in Map
// If there's no match or letter count runs out (count=0), return false;
