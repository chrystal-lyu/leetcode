var asteroidCollision = function(asteroids) {
  let s = [];
  for (let i = 0; i < asteroids.length; i++) {
    let a = asteroids[i];
    if (s.length == 0 || s[s.length - 1] < 0 || a > 0) {
      s.push(a);
    } else {
      if (Math.abs(s[s.length-1]) < Math.abs(a)) {
        s.pop();
        i--;
      } else if (Math.abs(s[s.length-1]) > Math.abs(a)) {
        continue;
      } else {
        s.pop();
      }
    }
  }
  return s;
};
asteroidCollision([5, 10, -5]);
