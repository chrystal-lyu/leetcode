// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is 
// "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

var ladderLength = function(beginWord, endWord, wordList) {
  let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let dict = new Set(wordList);
  let seen = new Set();
  let queue = [];
  let step = 1;
  queue.push(beginWord);
  while (queue.length > 0) {
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      let word = queue.shift();
      if (word === endWord) return step;
      dict.delete(word);
      for (let j = 0; j < word.length; j++) {
        let arr = word.split('')
        let c = arr[j];
        for (let l of letters) {
          if (l == c) continue;
          arr[j] = l;
          word = arr.join('');
          if (dict.has(word) && !seen.has(word)) queue.push(word);
          seen.add(word);
        }
        word = word.split('');
        word[j] = c;
        word = word.join('');
      }
    }
    step++;
  }
  return 0;
};

console.log(ladderLength('hit','cog',["hot","dot","dog","lot","log","cog"]))