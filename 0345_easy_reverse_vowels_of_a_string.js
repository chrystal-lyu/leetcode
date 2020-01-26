// Input: "leetcode"
// Output: "leotcede"

var reverseVowels = function(s) {
  const swap = function (str, i, j) {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
  }

  if (s.length < 2) return s;
  let i = 0, j = s.length-1;
  let vowels = 'aeiouAEIOU';
  s = s.split('');

  while (i <= j) {
    let s_i = s[i];
    let s_j = s[j];

    if (vowels.indexOf(s_i) == -1) i++;
    if (vowels.indexOf(s_j) == -1) j--;
    if (vowels.indexOf(s_i) !== -1 && vowels.indexOf(s_j) !== -1) {
      swap(s, i, j);
      i++;
      j--;
    }
  }
  
  return s.join('');
};

console.log(reverseVowels('aA'));