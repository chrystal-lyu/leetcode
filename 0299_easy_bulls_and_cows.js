var getHint = function(secret, guess) {
  let bulls = 0;
  let cows = 0;
  let count = new Array(10).fill(0);
  for (let i = 0; i<secret.length; i++) {
    let s = secret.charAt(i) - '0';
    let g = guess.charAt(i) - '0';
    if(s === g) {
      bulls++
    } else {
      if (count[s] < 0) {
        cows++;
      }
      if (count[g] > 0) {
        cows++;
      }
      count[s]++;
      count[g]--;
    }
  }
  return bulls + 'A' + cows + 'B';
};

// When s[i] == g[i], we found a bull (both value and position match)
// When s[i] != g[i], we +1 for each s[i] seen and -1 for each g[i] seen
// Store the change in an array (count) of 10 zeroes
// Check if we have seen current s[i] in previous guess (count[s] < 0)
// Check if we have seen current g[i] in previous secret (count[g] > 0)
// In each of the above two cases, we found a cow (value match only)
