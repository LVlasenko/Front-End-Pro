// array = new Array(7);
// min = -20;
// max = 20;

// for (let i = 0, sum = 0; i < array.length; i++) {
//   arrayItem = Math.round(Math.random() * (max - min) + min);
//   array[i] = arrayItem;

//   if (arrayItem > 0 && arrayItem % 2 == 0) {
//     console.log(arrayItem);
//     sum += arrayItem;
//     console.log(sum);
//   }
// }

// array[array.length] = 0;

array = new Array(30);
min = -5;
max = 5;
arrayA = [];
arrayB = [];

for (let i = 0; i < array.length; i++) {
  arrayItem = Math.round(Math.random() * (max - min) + min);
  array[i] = arrayItem;
  //console.log(arrayItem);

  if (arrayItem > 0) {
    arrayA[arrayA.length] = arrayItem;
    console.log(arrayA, "before");
  } else if (arrayItem < 0) {
    arrayB[arrayB.length] = arrayItem;
    //console.log(arrayB);
  }
}

min = arrayA[0];
max = arrayB[0];

minJ = 0;
maxJ = 0;

for (let j = 0; j < arrayA.length; j++) {
  //console.log(arrayA[j]);

  if (arrayA[j] >= max) {
    max = arrayA[j];
    maxJ = j;
  }

  if (min >= arrayA[j]) {
    min = arrayA[j];
    minJ = j;
  }
}

swap = arrayA[minJ];
arrayA[minJ] = arrayA[maxJ];
arrayA[maxJ] = swap;

console.log(arrayA);
console.log(min, max);
console.log(minJ, maxJ);
