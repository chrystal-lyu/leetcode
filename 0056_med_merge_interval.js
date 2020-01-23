var merge = function(intervals) {
  intervals.sort((a,b) => { return a[0] - b[0]});
  let res = [];
  let newInterval = intervals[0]
  res.push(newInterval);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= newInterval[1]) {
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    } else {
      newInterval = intervals[i];
      res.push(newInterval);
    }
  }
  return res;
};

console.log(merge([[1,3],[2,6],[8,10],[9,18]]));