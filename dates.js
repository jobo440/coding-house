function age(year, month, day) {
  var date = new Date(year, month, day);
  var timeStamp = date.getTime();
  var currentTimeStamp = Date.now();
  var days = Math.abs(Math.floor((currentTimeStamp - timeStamp) / 86400000));

  function over30Days() {

  }
  function over12Months() {

  }
  
}

// tests
console.log(age(2017, 11, 17));
console.log(age(2015, 3, 6));
console.log(age(2015, 11, 2));