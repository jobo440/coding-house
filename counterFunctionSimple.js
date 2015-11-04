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