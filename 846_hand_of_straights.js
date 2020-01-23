var isNStraightHand = function(hand, W) {
  if (hand.length % W !== 0) return false;
  let map = new Map;
  for (let card of hand) {
    if (map[card]) {
      map[card]++
    } else {
      map[card] = 1
    }
  }

  hand.sort((a, b) => a - b);	

  for (let i = 0; i < hand.length; i++) {
    if (map[hand[i]]) {
      for (let j = 0; j < W; j++) {
        if (map[hand[i]+j] > 0) {
          map[hand[i]+j]--;
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
isNStraightHand([1,2,3,4,5], 3);