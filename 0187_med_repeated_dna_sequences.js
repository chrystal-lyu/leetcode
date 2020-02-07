// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

// Output: ["AAAAACCCCC", "CCCCCAAAAA"]

var findRepeatedDnaSequences = function(s) {
  let map = {};
  let set = new Set();
  for (let i = 0; i < s.length-9; i++) {
    let fragment = s.substring(i, i+10);
    if (map[fragment]) {
      set.add(fragment);
    }
    if (!map[fragment]) {
      map[fragment] = 1
    }
  }
  return Array.from(set);
};
