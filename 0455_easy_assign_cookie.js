var findContentChildren = function(g, s) {
  g = g.sort((a,b) => { return a - b});
  s = s.sort((a,b) => { return a - b});
  let i = 0;
  for (j=0; i<g.length, j<s.length; j++) {
    if (s[j] >= g[i]) {
      i++;
    }
  }
  return i;
};
