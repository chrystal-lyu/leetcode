// No. 1 64ms
var isIsomorphic = function(s, t) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      if (t.charAt(i) !== map.get(s.charAt(i))) return false;
    } else {
      for (let [k, v] of map) {
        if (v == t.charAt(i)) {
          return false;
        }
      }
    }
    map.set(s.charAt(i), t.charAt(i))
  }
  return true;
};

// No. 2 88 ms
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  let mapS = new Map();
  let mapT = new Map();
  for(let i = 0; i < s.length; i++) {
    if(!mapS.has(s.charAt(i)) && !mapT.has(t.charAt(i))) {
      mapS.set(s.charAt(i), t.charAt(i));
      mapT.set(t.charAt(i), s.charAt(i));
    }
    if(mapS.get(s.charAt(i)) !== t.charAt(i) || mapT.get(t.charAt(i) !== s.charAt(i))) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic('paper', 'titll'))