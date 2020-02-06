var findRadius = function(houses, heaters) {
  if (houses.length == 0) return 0;
  if (heaters.length == 0) return Number.MAX_VALUE;
  let radius = 0;
  let i = 0;
  let j = 0;
  let H = houses.sort((a,b) => { return a - b});
  let A = heaters.sort((a,b) => { return a - b});
  while (i < H.length) {
    while (j+1 < A.length && Math.abs(A[j]-H[i]) >= Math.abs(A[j+1]-H[i])) {
      j++
    }
    radius = Math.max(radius, Math.abs(A[j]-H[i]));
    i++;
  }
  return radius;
};
