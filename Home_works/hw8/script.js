//-----------------0-------------------------------
//Cоздать конвертер-функцию которая получает на вход массив вида:
//mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]];
//а на выходе получим переобразованый массив: [1,2,3,3.1,4,5,6,7,8]

var mass = [[1, 2, 3, [3, 1]], 4, [5, 6, [7, 8]]];

function converter(array) {
  var temparray = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      temparray.push(array[i]);
    } else {
      temparray = temparray.concat(converter(array[i]));
    }
  }

  return temparray;
}
console.log(converter(mass));

//using reduce method
// function expand(arr) {
//   var i = 0;
//   while (i < arr.length) {
//     arr = arr.reduce(function (a, b) {
//       return a.concat(b);
//     }, []);
//     i++;
//   }
//   return arr;
// }
// console.log(expand(mass));

//-----------------1-------------------------------
//Создать объект с такой структурой:
//obj = { a: 10, b: 12, c: { f: 13 } }
//Написать функцию convert(obj), он получает аргументом obj.
//Функция должна вернуть новый объект: newObj = { a: 10, b: 12, f: 13 }

var obj = {
  a: 10,
  b: 12,
  c: {
    f: 13,
  },
};

function convert(obj) {
  var newObj = {};
  for (var i in obj) {
    if (typeof obj[i] === "object") {
      Object.assign(newObj, obj[i]);
    } else {
      newObj[i] = obj[i];
    }
  }

  return newObj;
}

console.log("Converted object: ", convert(obj));

//-----------------2-------------------------------
//Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта
//и возвращает новый, который состоит из свойство обоих обьектов (склеить).
//Если свойство повторяется, то взять значение второго обьекта

function assignObjects(obj1, obj2) {
  newObj = {};
  Object.assign(newObj, obj1, obj2);

  return newObj;
}

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));

//-----------------3-------------------------------
//Адаптировать функцию assignObjects() под неопределенное количество объектов.
//assignObjects(obj1, obj2, ....., objn);

function assignObjectsN() {
  newObj = {};
  console.log(arguments);
  for (const argument in arguments) {
    Object.assign(newObj, arguments[argument]);
  }

  return newObj;
}

console.log(
  "Assign many objects: ",
  assignObjectsN({ x: 10, y: 20 }, { z: 30 }, { d: 100 })
);
