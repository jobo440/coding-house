// first 12 numbers base 3 number system: 
// 0, 1, 2, 10, 11, 12, 20, 21, 22, 100, 101, 102

var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115]
// not so sure about this one, here are my ideas. 
String.fromCharCode.apply(null, ascii);

function makeNextChar() {
  var i = 0;
  var converted = [];
  return function() {
    if(i === this.length) return converted;
    converted.push(String.fromCharCode(this[i]));
    i++;
    return this;
  }
}

ascii.nextChar = makeNextChar();

var converted = ascii.nextChar().nextChar().nextChar().nextChar().nextChar().nextChar().nextChar().
nextChar().nextChar().nextChar().nextChar().nextChar().nextChar().nextChar().
nextChar().nextChar().nextChar().nextChar().nextChar().join('');

console.log(converted);