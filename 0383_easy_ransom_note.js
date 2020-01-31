// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

var canConstruct = function(ransomNote, magazine) {
  if(ransomNote.length > magazine.length) return false;
  magazine = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
    let index = magazine.indexOf(ransomNote[i]);
    if (index !== -1) {
      magazine.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};
