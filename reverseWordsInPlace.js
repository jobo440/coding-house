function wordsReverser(str) {
  var cache = '';
  return str.split('').reduce(function(acc, char) {
    if(char.match(/[a-zA-Z]/)) {
      cache += char;
      return acc;
    }
    if(cache) {
      acc.push(cache.split('').reverse('').join(''));
      cache = '';
      return acc.concat(char);
    }
    return acc.concat(char);
  }, []).join('');
}

// test
console.log(wordsReverser("This is fun, hopefully."));