/*
 * @lc app=leetcode id=324 lang=javascript
 *
 * [324] Wiggle Sort II
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  nums.sort((a,b) => {return a - b;})
  let res = [];
  let mid = Math.floor(nums.length/2);
  let index = nums.length % 2 === 0 ? mid - 1 : mid;
  let i = 0,
      j = nums.length - 1;
  let copy = [...nums]
  while (i < nums.length) {
    nums[i] = copy[index];
    if (i < nums.length - 1) {
      nums[i+1] = copy[j]
    }
    i += 2;
    j--;
    index--;
  }
};

console.log(wiggleSort([1, 5, 1, 1, 6, 4,9]));
