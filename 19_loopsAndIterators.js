var numList = [2, 7, 4, 8, 6, 4];

// while
var biggest = 0;
var i = 0;
while(i < numList.length) {
  biggest = biggest < numList[i] ? numList[i] : biggest;
  i++;
}

// do while
biggest = 0;
i = 0;
do {
  biggest = biggest < numList[i] ? numList[i] : biggest;
  i++;
}
while(i < numList.length);

// for 
biggest = 0;
i = 0;
for(i = 0; i < numList.length; i++) {
  biggest = biggest < numList[i] ? numList[i] : biggest;
}

// forEach
biggest = 0;
numList.forEach(function(num) {
  biggest = biggest < num ? num : biggest; 
});

// for in
var obj = { "wheels": 3, "horsepower": 600, "decal": "flames", "awesome": true , "holdsBarred": [] };
for(item in obj) {
  console.log(item, obj[item]);
}

// map
[1, 2, 5, 7, 11].map(function(num) {
  return Math.pow(num, 2);
});

// reduce
[3, 5, 7, 9, 12].reduce(function(sum, num) {
  return sum + num;
});

// filter
[1, 22, 35, 2, 4, 7, 9].filter(function(num) {
  return num % 2 === 0;
});

// sort
['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee'].sort(function(a, b) {
  if(a < b) return 1;
});

// another way
['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee'].sort().reverse();