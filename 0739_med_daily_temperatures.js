var dailyTemperatures = function(T) {
  let res = [];
  for (let i = 0; i < T.length; i++) {
    let count = 0;
    for (let j = i+1; j < T.length; j++) {
      if (T[j] > T[i]) {
        count = j - i;
        break;
      }
    }
    res.push(count);
  }
  return res;
};
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
// [1, 1, 4, 2, 1, 1, 0, 0]