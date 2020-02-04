var numberOfBoomerangs = function(points) {
  const distance = function (a,b) {
    let x = Math.abs(a[0] - b[0]);
    let y = Math.abs(a[1] - b[1]);
    return x * x + y * y;
  }
  let res = 0;
  for (let i = 0; i < points.length; i++) {
    let map = new Map();
    for (let j = 0; j < points.length; j++) {
      if (i == j) continue;
      let d = distance(points[i], points[j]);
      if (map.has(d)) {
        let val = map.get(d)
        res += 2*val;
        map.set(d, val+1);
      } else {
        map.set(d, 1)
      }
    }
  }
  return res;
};
