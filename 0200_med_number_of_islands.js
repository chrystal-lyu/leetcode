var numIslands = function(grid) {
  const island = function (grid, i, j) {
    if (i < 0 || i > grid.length-1 || j < 0 || j > grid[0].length-1 || grid[i][j] !== '1') return;
    grid[i][j] = '0';
    island(grid, i+1, j);
    island(grid, i-1, j);
    island(grid, i, j+1);
    island(grid, i, j-1);
  }
  let res = 0;
  if (grid.length == 0) return res;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        island(grid, i, j);
        res++;
      }
    }
  }
  return res;
};
