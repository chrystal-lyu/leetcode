// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations. 

// No. 1
var moveZeroes1 = function(nums) {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      n--;
    } else {
      i++;
    }
  }
};

// No. 2
var moveZeroes = function(nums) {
  let n = nums.length;
  let pos = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++
    }
  }
  for (let i = pos; i < n; i++) {
    nums[i] = 0;
  }
}

console.log(moveZeroes([0,0,1]));


// [0,1,0,3,12] i = 0 swap(0, 1) n = 5
// [1,0,0,3,12] i = 1 swap(1, 3) n = 4
// [1,3,0,0,12] i = 2 swap(2, 4) n = 3
// [1,3,12,0,0] i = 3 (= n, therefore quit loop)

