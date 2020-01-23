// No. 1
var isValidSudoku = function(board) {
  let row = true,
      col = true,
      grid = true;
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {        
        for (let k = 0; k < board[i].length; k++) {
          // 1. Row has 1-9 without repetition
          if (board[i][k] !== "." && j !== k) {
            if (board[i][j] === board[i][k]) return false;
          }
          // 2. Column has 1-9 without repetition 
          if (board[k][j] !== "." && i !== k) {
            if (board[k][j] === board[i][j]) return false;
          }
        }        
      }
    }
  }
  
  // 3. Grid 3x3 has 1-9 without repetition
  for (let i = 0; i < 9; i = i+3) {
    for (let j = 0; j < 9; j = j+3) {
      let map = {};
      for(let a = 0; a < 3; a++) {
        for (let b = 0; b < 3; b++) {
          let char = board[i+a][j+b];
          if (char !== ".") {
            if (!map[char]) {
              map[char] = 1
            } else {
              return false
            }
          }
        }
      }
    }
  }

  return true;
};

// No. 2
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
        col = new Set(),
        box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
      
      if (_row != '.') {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }
      
      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      } 
    }
  }
  return true
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))