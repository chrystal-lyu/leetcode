var findPoisonedDuration = function(timeSeries, duration) {
  if (timeSeries.length === 0) return 0;
  if (timeSeries.length === 1) return duration;

  let res = duration;
  for (let i = 1; i < timeSeries.length; i++) {
    let diff = timeSeries[i] - timeSeries[i-1];
    if (diff < duration) {
      res += diff;
    } else {
      res += duration;
    }
  }
  return res;
};
findPoisonedDuration([1,4,8,10],5)