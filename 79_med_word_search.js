var exist = function(board, word) {
  let r = board.length;
  let c = board[0].length;

  const helper = function(i,j,k) {
    if (k == word.length) return true;
    if (i < 0 || i >= r || j < 0 || j >= c || board[i][j] !== word.charAt(k)) return false;
    board[i][j] = "*"
    let match = helper(i+1,j,k+1) || helper(i-1,j,k+1) || helper(i,j+1,k+1) || helper(i,j-1,k+1);
    board[i][j] = word.charAt(k);
    return match;
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (helper(i,j,0)) return true;
    }
  }
  return false;
};
console.log(exist([
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','E','E','E']], "CCED"))