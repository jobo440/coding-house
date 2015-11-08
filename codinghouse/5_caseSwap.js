function swapCase(str) {
	return str.split('')
	.map(function(x) {
		return x.toUpperCase() === x ? x.toLowerCase() : x.toUpperCase();
	})
  .join('');
}

// test
console.log(swapCase('Life is 10% what happens to you, and 90% of how you REACT to it'))
