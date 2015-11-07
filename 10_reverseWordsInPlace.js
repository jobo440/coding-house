function wordsReverser(str) {
  var cache = '';
  return str.split('').reduce(function(acc, char, i) {
    if(char.match(/[a-zA-Z]/)) {
      cache += char;
    if(i === str.length - 1) acc.push(cache.split('').reverse('').join('')); // I'm not real happy with the repititon here
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
console.log(wordsReverser("This is fun, hopefully"));
console.log(wordsReverser("This is fun!!!!!!!     !!!!!hopefully????"));