// array = new Array(10);
// max = 10;
// min = -10;

// for (i = 0; i < array.length; i++) {
//   array[i] = Math.round(Math.random() * (max - min) + min);

//   if (i % 2 === 0) {
//     array[i] = 0;
//   }
// }

// console.log(array);

// array = new Array(3);
// let number;

// for (i = 0; i < array.length; i++) {
//   do {
//     number = prompt("Please, enter a number");
//   } while (isNaN(number) || number === null || number === "" || number < 0);
//   array[i] = number;
// }

// console.log(array);

A = new Array(10);
B = [];
max = 7;
min = -7;

for (i = 0; i < A.length; i++) {
  A[i] = Math.round(Math.random() * (max - min) + min);
}

console.log(A, "array origin");

max = A[0];
min = A[0];

minJ = 0;
maxJ = 0;

for (j = 1; j < A.length; j++) {
  if (A[j] >= max) {
    max = A[j];
    maxJ = j;
  }
  if (A[j] <= min) {
    min = A[j];
    minJ = j;
  }
}

for (j = maxJ + 1; j < minJ; j++) {
  B[B.length] = A[j];
}

for (j = minJ + 1; j < maxJ; j++) {
  B[B.length] = A[j];
}

console.log(max, min, maxJ, minJ, "max, min, maxJ, minJ");
console.log(B);
