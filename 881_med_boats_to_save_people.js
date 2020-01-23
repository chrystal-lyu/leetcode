var numRescueBoats = function(people, limit) {
  people.sort((a,b) => a - b);
  let i, j;
  for (i = 0, j = people.length - 1; i <= j; j--) {
    if (people[i] + people[j] <= limit) {
      i++;
    }
  }
  return people.length - 1 - j;
};
numRescueBoats([3,1,3,2,4,2,1,1,1,1],4)