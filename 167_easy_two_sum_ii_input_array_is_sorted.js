var twoSum = function(numbers, target) {
  let res = [];
  for (let i = 0; i < numbers.length-1; i++) {
    let newTarget = target - numbers[i];
    let start = i+1;
    let end = numbers.length-1;
    while (start <= end) {
      let mid = Math.floor((end+start)/2);
      if (numbers[mid] === newTarget) {
        return res = [i+1, mid+1]
      } else if (numbers[mid] < newTarget) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return res;
};

console.log(twoSum([2,3,4],6));