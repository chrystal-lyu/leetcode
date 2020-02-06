var islandPerimeter = function(grid) {
  let perimeter = 0;
  let n = grid.length;
  let m = grid[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        if (i == 0 || grid[i-1][j] == 0) perimeter++;
        if (i == n-1 || grid[i+1][j] == 0) perimeter++;
        if (j == 0 || grid[i][j-1] == 0) perimeter++;
        if (j == m-1 || grid[i][j+1] == 0) perimeter++;
      }
    }
  }
  return perimeter;
};
