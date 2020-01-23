var totalHammingDistance = function(nums) {
  var tot = 0;
  for (let i = 0; i < 32; i++) {
    var count = 0;
    for (let j = 0; j < nums.length; j++) {
      count += (nums[j]>>i)&1;
    }
    tot += count * (nums.length - count);
  }
  return tot;
};
totalHammingDistance([4, 14, 2]);

for (let i = 0; i < 10; i++) {
  console.log((i >> 1)&1)
}