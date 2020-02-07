var constructRectangle = function(area) {
  let res = [];
  let i = 1;
  while (area/i >= 1 && area/i >= i) {
    if (area%i == 0) {
      res = [area/i, i];
    }
    i++;    
  }
  return res;
};
