//let i = 0;
//do {
//  alert(i);
//  i++;
//} while (i < 150);

//let sum = 0;
//for (let i = 0; i <= 150; i++) {
//  sum += i;
//}
//alert(sum);

//let sum = 0;
//for (let i = 0; i < 150; i++) {
//  if (i % 2 == 0) continue;
//  sum += i;
//}
//alert(sum);

//let number = prompt("Please, enter a number");
// if (isNaN(number) || number === null || number === "") {
//   prompt("Please, enter a number");
// } else {
//   alert(number);
// }

do {
  number = prompt("Please, enter a number");
} while (isNaN(number) || number === null || number === "");

// let login = prompt("Please, enter your Log In");

// if (login === "Админ") {
//   let pasw = prompt("Please, enter your Password");

//   if (pasw === "Черный Властелин") {
//     alert("Добро пожаловать!");
//   } else if (pasw == null) {
//     alert("Отменено");
//   } else {
//     alert("Пароль неверен");
//   }
//   console.log(pasw);
// } else if (login == null) {
//   alert("Отменено");
// } else {
//   alert("Я Вас не знаю");
// }
// console.log(login);

//let numberN = prompt("Please, enter a number");
//n = numberN;
//f = 1;
//for (; n; f *= n--) {}
//alert(f);

//alert("Ввести с клавиатуры 2 числа a и b (где a < b)");
//let a = prompt("Введите число а");
//let b = prompt("Введите число b");
//console.log(a, b);

//for (let i = a; i <= b; i++) {
//  if (i % 2 == 1) continue;
//  console.log(i * i);

//  if (i == b) break;
//}
