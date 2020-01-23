var climbStairs = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let a = 1;
  let b = 1;

  while (n--) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  return a;
}

console.log(climbStairs(5));