var arrangeCoins = function(n) {
  let i = 1;
  let res = 0;
  while (n > 0) {
    n -= i++;
    res++;
  }
  return n == 0 ? res : res - 1;
};
