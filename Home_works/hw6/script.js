//Написать функцию заполнения массива. Имя произвольное.

// function makeArray() {
//   array = [];
//   size = 7;
//   for (i = 0; i < size; i++) {
//     array[i] = prompt("Please, enter a number");
//   }

//   console.log(array);
// }

// makeArray();

//Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak.
//В переменной знак может быть: +, -, *, /, %, ^.
//Вывести результат математического действия, указанного в переменной znak.

function doMath() {
  if (znak === "*") {
    return x * y;
  } else if (znak === "/") {
    return x / y;
  } else if (znak === "+") {
    return parseInt(x) + parseInt(y);
  } else if (znak === "-") {
    return x - y;
  } else if (znak === "%") {
    return x % y;
  } else if (znak === "^") {
    return x ^ y;
  }
}

function getParametr() {
  do {
    x = prompt("Please, enter a number");
  } while (isNaN(x) || x === null || x === "");
  do {
    y = prompt("Please, enter a number");
  } while (isNaN(y) || y === null || y === "");
  symbols = ["+", "-", "*", "/", "^", "%"];
  znak = prompt("Please, enter a symbol");
  if (symbols.indexOf(znak) === -1) {
    alert("Invalid symbol");
  }
}

console.log(doMath(getParametr()));

//Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.

// function replacer(string, letter) {
//   deletedElements = letter.join("");
//   console.log(deletedElements);

//   return string.replace(new RegExp(`[${deletedElements}]`, "gi"), "");
// }

// console.log(replacer("Hello World", ["l", "d"]));

//Напиши функцию filter, которая принимает функцию-предикат и массив.
//Возвращает она массив значений, для которых предикат вернет true.

// var input = [1, 2, 3, 4, 5, 6];
// function isEven(x) {
//   return x % 2 == 0;
// }
// function filter(input, isEven) {
//   newArr = [];
//   for (let i = 0; i < input.length; i++) {
//     if (isEven(input[i])) {
//       newArr[newArr.length] = input[i];
//     }
//   }
//   return newArr;
// }
// console.log(filter(input, isEven));

//-----------не дз задача-------------------
// var indices = [];
// var array = ["a", "b", "a", "c", "a", "d"];
// var element = "a";
// var idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);
