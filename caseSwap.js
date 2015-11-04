function swapCase(str) {
	return str.split('')
	.map(function(x) {
		return x.toUpperCase() === x ? x.toLowerCase() : x.toUpperCase();
	})
  .join('');
}

// test
console.log(swapCase('hello HOW are 23423&@*#*$!#    syou?'))
