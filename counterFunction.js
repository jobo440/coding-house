function superCounter(str) {
  var words = str.replace(/[^A-za-z\s]/gi, '')
  .split(' ')
  .filter(function(x) {
    return !(x === '');
  })
  .length;
  var chars = str.length;
  var spaces = str.split(' ').length - 1

  return {
    words: words,
    chars: chars,
    avgLength: (chars - spaces) / words,
    spaces: spaces
  }
}

// tests
console.log(superCounter('23&#$ &&#.... .. hey!@#!!!!! 382738 how are you@#$'));
console.log(superCounter("Count me in"));