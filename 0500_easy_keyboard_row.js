/**
 * @param {string[]} words
 * @return {string[]}
 */

// 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'
// 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'
// 'z', 'x', 'c', 'v', 'b', 'n', 'm'

var findWords = function(words) {
  const lib = {'q':0, 'w':0, 'e':0, 'r':0, 't':0, 'y':0, 'u':0, 'i':0, 'o':0, 'p':0,'a':1, 's':1, 'd':1, 'f':1, 'g':1, 'h':1, 'j':1, 'k':1, 'l':1, 'z':2, 'x':2, 'c':2, 'v':2, 'b':2, 'n':2, 'm':2};
  let res = [];
  for (let word of words) {
    let valid = true;
    for (let i = 0; i < word.length-1; i++) {
      let l1 = word.charAt(i).toLowerCase();
      let l2 = word.charAt(i+1).toLowerCase();
      if (lib[l1] !== lib[l2]) {
        valid = false;
        break;
      }
    }
    if (valid) res.push(word);
  }
  return res;
};
