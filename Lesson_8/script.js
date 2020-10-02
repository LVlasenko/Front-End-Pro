//
// player = {
//   name: "Valera",
//   lastName: "Ternavsky",
//   age: 25,
//   isMarried: false,
//   run: function () {
//     console.log("running...");
//   },
// };

// console.log(Object.keys(player));

// user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// let schedule = {};

// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// let sum = 0;
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric() {
  for (let key in menu) {
    if (typeof menu.key == "number") {
      menu[key] *= 2;
    }
  }
}
multiplyNumeric(menu);

console.log(menu);
