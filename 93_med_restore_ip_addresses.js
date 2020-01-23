var restoreIpAddresses = function(s) {
  const validIP = function(str) {
    if (str.length > 3 || parseInt(str) > 255 || (str.length > 1 && str.charAt(0) == "0")) return false;
    return true;
  }
  let n = s.length;
  let res = [];
  for (let i = 0; i < 4 && i < n-2; i++) {
    for (let j = i+1; j < i+4 && j < n-1; j++) {
      for (let k = j+1; k < j+4 && k < n; k++) {
        let s1 = s.substring(0,i),
            s2 = s.substring(i,j),
            s3 = s.substring(j,k),
            s4 = s.substring(k,n);
        if(validIP(s1) && validIP(s2) && validIP(s3) && validIP(s4)) {
          res.push(s1+'.'+s2+'.'+s3+'.'+s4);
        }
      }
    }
  }
  return res;
};
console.log(restoreIpAddresses("25525511135"))