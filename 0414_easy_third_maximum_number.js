var thirdMax = function(nums) {
  let map = {};
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) map[nums[i]]=1;
    else map[nums[i]]++;
  }
  for (let key in map) {
    arr.push(parseInt(key));
  }
  arr = arr.sort((a,b) => {return b - a});
  return arr[2] !== undefined ? arr[2] : arr[0];
};
