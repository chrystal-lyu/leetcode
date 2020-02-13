var computeArea = function(A, B, C, D, E, F, G, H) {
  let rec1 = Math.abs((C-A)*(D-B));
  let rec2 = Math.abs((G-E)*(H-F));

  let p1 = Math.max(A, E);
  let p2 = Math.min(C, G);
  let p3 = Math.max(F, B);
  let p4 = Math.min(D, H);

  let overlap = 0;
  if (p4-p3 > 0 && p2-p1 > 0) {
    overlap = (p4-p3)*(p2-p1);
  }
  return rec1 + rec2 - overlap;
};
