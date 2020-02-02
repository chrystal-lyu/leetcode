var minMoves = function(nums) {
  let n = nums.length;
  let min = Math.min(...nums);
  let sum = 0;
  for (let num of nums) sum += num;
  return sum-(n*min);
};
