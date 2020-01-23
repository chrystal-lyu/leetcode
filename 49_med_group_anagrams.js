var groupAnagrams = function(strs) {
  let map = {};
  let res = [];
  for (let str of strs) {
    let key = str.split('').sort().join('');
    if (!map[key]) {
      map[key] = [str];
    } else {
      map[key].push(str);
    }
  }
  for (let key in map) {
    res.push([...map[key]])
  }
  return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))