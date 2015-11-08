function age(year, month, day) {
  var givenDate = new Date(year, month - 1, day);
  var givenTimeStamp = givenDate.getTime();
  var currentDate = new Date()
  var currentTimeStamp = Date.now();
  var totalDays = Math.abs(Math.floor((currentTimeStamp - givenTimeStamp) / 86400000));

  
  
  

  if(totalDays > 365) {
    var yearDiff = Math.abs(currentDate.getFullYear() - givenDate.getFullYear());
    var monthDiff = Math.abs(currentDate.getMonth() - givenDate.getMonth()) + 1;
    return yearDiff + ' years, ' + monthDiff + ' months, ' + 
  }
  if(totalDays > 30) {

  }
  return totalDays + ' days';
}

// tests
console.log(age(2017, 11, 17));
console.log(age(2015, 3, 6));
console.log(age(2015, 11, 2));