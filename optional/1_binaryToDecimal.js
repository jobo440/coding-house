String.prototype.binaryToDecimal = function() {
  return this.split('')
  .reverse()
  .reduce(function(decimal, bin, i) {
    return Number(bin) ? decimal += Math.pow(2, i) : decimal;
  }, 0);
}

// test
console.log("11001010".binaryToDecimal());
console.log("1110".binaryToDecimal());