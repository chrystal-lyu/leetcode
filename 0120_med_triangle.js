var minimumTotal = function(triangle) {
  let n = triangle.length;
  let min = triangle[n-1];
  for (let i = 0; i < n-2; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      min[j] = triangle[i][j] + Math.min(min[j], min[j+1]);
    }
  }
  return min[0];
};

// Start from second last row i
// For each number(j) in i, add the minimum of last row's j and j+1 number

//    [2]
//   [3,4]
//  [6,5,7]
// [4,1,8,3]

// min = [4,1,8,3]

// min = [6+1, 5+1, 7+3, 3]
//                       ^
//                      from last step

// min = [3+6, 4+6, 10, 3]
//                  ^^  ^
//                from last step

// min = [2+9, 10, 10, 3]
//             ^^  ^^  ^
//            from last step

// return min[0] (11);