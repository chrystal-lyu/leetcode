var leastBricks = function(wall) {
  let map = {};
  let count = 0;
  for (let row of wall) {
    let sum = 0;
    for (let i = 0; i < row.length - 1; i++) {
      sum += row[i]
      if (map[sum]) {
        map[sum]++;
      } else {
        map[sum] = 1;
      }
      count =  Math.max(count, map[sum])
    }
  }
  return wall.length - count;
};
leastBricks(
  [[1,2,2,1],
  [3,1,2],
  [1,3,2],
  [2,4],
  [3,1,2],
  [1,3,1,1]]
);