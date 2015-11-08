function wordSelector(str) {
  // filter out words well enough to reduce them
  var onlyWords = str.split(' ').map(function(group) {
    return group.split('').filter(function(char) {
      return char.match(/[a-zA-Z]/);
    }).join('');
  });
  // return most repeated words
  var wordsWithMostRepeated = onlyWords.reduce(function(topWordObj, word) {
    var numMaxRepeatedInWord = word.split('').reduce(function(currentCount, char) {
      var matchNotChar = '[^' + char + ']';
      var numRepeated = word.replace(new RegExp(matchNotChar, 'g'), "").length;
      return currentCount < numRepeated ? numRepeated : currentCount;
    }, 0);
    if(topWordObj.timesRepeated === numMaxRepeatedInWord) topWordObj.words.push(word);
    if(topWordObj.timesRepeated < numMaxRepeatedInWord) {
      topWordObj.timesRepeated = numMaxRepeatedInWord;
      topWordObj.words = [word];
    }
    return topWordObj;
  }, {timesRepeated: 0, words: []});
  return wordsWithMostRepeated.words;
}

// test
console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));
console.log(wordSelector("hellllo whats up?????????        !!!dropthebassss!!!   :)    ##############"));