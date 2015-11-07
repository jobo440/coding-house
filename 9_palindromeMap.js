function palindromicMap(str) {
	return str.split(' ')
  	.map(function(word) {
      function checkLetters(word, i) {
        var wordLength = word.length;
        if(i > (wordLength - 1) / 2) return true;
        return word.charAt(i) === word.charAt(wordLength - 1 - i) ? checkLetters(word, i + 1) : false;
      };
      return checkLetters(word, 0);
	});
};

// test
console.log(palindromicMap("stash and pop on this level"));


