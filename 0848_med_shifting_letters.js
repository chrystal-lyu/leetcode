var shiftingLetters = function(S, shifts) {
  S = S.split('');
  let ans = [];
  let shift = 0;

  for (let i = shifts.length - 1; i >= 0; i--) {
    shift = (shift + shifts[i]) % 26;
    ans[i] = String.fromCharCode((S[i].charCodeAt(0)-97 + shift) % 26 + 97);
  }
  return ans.join('');
};
shiftingLetters("abc", [3,5,9])