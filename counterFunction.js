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
console.log(superCounter('Count me in'));

// if we know that the string is just letters and spaces
function superCounter2(str) {
  var toArr = str.split(' ');
  var words = toArr.length;
  var chars = str.length;
  var spaces = toArr.length - 1;
  return {
    words: words,
    chars: chars,
    avgLength: (chars - spaces) / words,
    spaces: spaces
  }
}