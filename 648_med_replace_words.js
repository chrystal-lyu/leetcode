var replaceWords = function(dict, sentence) {
  let set = new Set;
  let res = "";
  let words = sentence.split(' ');
  for (let d of dict) set.add(d);
  for (let i = 0; i < words.length; i++) {
    let prefix = "";

    for (let j = 1; j <= words[i].length; j++) {
      prefix = words[i].substr(0, j);
      if (set.has(prefix)) break;
    }
    res += " ";
    res += prefix;
  }
  return res.slice(1);
};
replaceWords(["cat", "bat"], "the cattle was battled by the battery")