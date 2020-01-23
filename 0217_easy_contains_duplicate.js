var containsDuplicate = function(nums) {
  if(nums.length < 2) return false;
  
  let set = new Set();
  for (let num of nums) {
    if(set.has(num)) {
      return true;
    } else {
      set.add(num);
    }
  }
  return false;
};