var canCompleteCircuit = function(gas, cost) {
  let n = gas.length;
  let start = 0;
  let tank = 0;
  let total = 0;
  for (let i = 0; i < n; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i+1;
      total += tank;
      tank = 0;
    }
  }
  return total + tank >= 0 ? start : -1;
};

// gas  = [1,2,3,4,5]
// cost = [3,4,5,1,2]