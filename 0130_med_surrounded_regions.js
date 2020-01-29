var solve = function(board) {
  let n = board.length;
  if (n == 0) return;
  let m = board[0].length;
  if (n < 3 || m < 3) return;
  const dfs = function (i, j, board) {
    if (i<0 || i>n-1 || j<0 || j>m-1 || board[i][j] !== 'O') return;
    board[i][j] = '*';
    dfs(i+1, j, board);
    dfs(i-1, j, board);
    dfs(i, j+1, board);
    dfs(i, j-1, board);
  }
  // check first and last row
  for (let j = 0; j < m; j++) {
    if (board[0][j] == 'O') dfs(0, j, board);
    if (board[n-1][j] == 'O') dfs(n-1, j,board);
  }
  // check first and last column
  for (let i = 0; i < n; i++) { 
    if (board[i][0] == 'O') dfs(i, 0, board);
    if (board[i][m-1] == 'O') dfs(i, m-1, board);
  }
  //post processing
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] == 'O') board[i][j] = 'X';
      if (board[i][j] == '*') board[i][j] = 'O';
    }
  }
  return board;
};
// X X X X        X X X X
// X O O X        X X X X 
// X X O X   ->   X X X X 
// X O X X        X O X X