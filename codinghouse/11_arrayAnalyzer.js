function arrayAnalyzer() {
  var numArr = Array.prototype.slice.call(arguments);
  numArr.sort(function(a, b) { return a - b });
  var odds = numArr.reduce(function(count, num) {
    return num % 2 === 0 ? count : count + 1;
  }, 0);
  var negatives = numArr.reduce(function(count, num) {
    return num < 0 ? count + 1 : count;
  }, 0);
  var average = numArr.reduce(function(count, num) {
    return count + num;
  }) / numArr.length;
  var sorted = numArr.sort(function(a, b) {
    return a - b;
  });
  function calcMedianEven(arr) {
    return (arr[Math.floor((arr.length - 1) / 2)] + arr[Math.floor(arr.length / 2)]) / 2;
  }
  function calcMedianOdd(arr) {
    return arr[(arr.length - 1) / 2];
  }
  return {
    odds: odds,
    negatives: negatives,
    average: average.toFixed(2),
    median: numArr.length % 2 === 0 ? calcMedianEven(numArr) : calcMedianOdd(numArr)
  };
}

// test
console.log(arrayAnalyzer(7, -3, 0, 12, 44, -5, 3));