/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.map = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let n = word.length;
  if (!this.map[n]) this.map[n] = [word];
  else this.map[n].push(word)
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  let n = word.length;
  if (n in this.map) {
    for (let i = 0; i < this.map[n].length; i++) {
      let j = 0;
      for (j; j < n; j++) {
        if (word.charAt(j) !== '.' && word.charAt(j) !== this.map[n][i].charAt(j)) break;
      }
      if (j == n) return true;
    }
  }
  return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */