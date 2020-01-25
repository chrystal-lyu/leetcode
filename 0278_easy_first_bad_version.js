/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let start = 1;
    let end = n;
    while (start < end) {
      let mid = Math.floor(start+(end-start)/2);
      if (isBadVersion(mid) == false) {
        start = mid+1;
      } else {
        end = mid;
      }
    }
    return start;
  };
};

//    1      2      3      4     5
// [false, false, false, true, true]
// start = 1
// end = 5
