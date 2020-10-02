// array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < array.length - 1; i += 2) {
//     currentElement = array[i];
//     array[i] = array[i + 1];
//     array[i + 1] = currentElement;
//   }

//   console.log(array);

A = new Array(3);
size = 5;

for (i = 0; i < A.length; i++) {
  A[i] = new Array(size);
  for (j = 0; j < size; j++) {
    A[i][j] = Math.round(Math.random() * 10);
  }
}
console.log(A[1], "array A origin");

let minRow = 0;
let minSum = 0;
let maxRow;
let maxSum;

for (i = 0; i < A.length; i++) {
  sum = 0;
  for (j = 0; j < size; j++) {
    sum += A[i][j];
  }
  console.log(sum);

  if (i == 0) {
    minRow = i;
    minSum = sum;
  }
  if (sum <= minSum) {
    minRow = i;
    minSum = sum;
  } else {
    maxSum = sum;
    maxRow = i;
  }
}
console.log("Min row index: ", minRow, "MinSUm: ", minSum);
console.log("Max row index: ", maxRow, "MaxSUm: ", maxSum);

temp = A[minRow];
A[minRow] = A[maxRow];
A[maxRow] = temp;

console.log(A[1], "new A array");
