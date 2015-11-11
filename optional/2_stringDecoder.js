function decodeStr(input) {
  var key = input.slice(input.indexOf('|') + 1).split(' ');
  return key.map(function(index) {
    return input.charAt(index);
  }).join('');
}
 
// test
console.log(decodeStr("01R34E6D|2 5 7"));
console.log(decodeStr("sfGuisOthO12D|2 6 9 12"));