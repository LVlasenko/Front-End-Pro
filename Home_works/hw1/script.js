document.write("**************");
document.write("<br/>");
power = 49;
weight = 49;
document.write(
  "Ускорение тела при силе F = " + power + ", и массе m = " + weight + ":"
);
document.write("<br/>");
document.write("--------------------");
document.write("<br/>");
document.write("a = " + power / weight + ".");
document.write("<br/>");
document.write("--------------------");
document.write("<br/>");
document.write("end.");

studentFirst = prompt("Age") + " " + prompt("Name") + " " + prompt("Last Name");
studentSecond =
  prompt("Age") + " " + prompt("Name") + " " + prompt("Last Name");
studentThird = prompt("Age") + " " + prompt("Name") + " " + prompt("Last Name");

console.log("**************");
console.log("Список студентов зарегестрировавшихся на вебинар:");
console.log("1. " + studentFirst);
console.log("2. " + studentSecond);
console.log("3. " + studentThird);
console.log(
  "-------------- Средний возраст студента: " +
    (parseInt(studentFirst) +
      parseInt(studentSecond) +
      parseInt(studentThird)) /
      3 +
    "--------------"
);
console.log("**************");

a = 7;
b = 3;

console.log("*");
console.log("*");
console.log("*");
console.log("*");
console.log("*");
console.log("задача из лекции");
console.log("**************");
console.log("При а =" + a + ", b = " + b);
console.log("Результат:");
console.log("--------------------");
console.log(
  "a + b = " +
    (a + b) +
    "; a - b = " +
    (a - b) +
    "; a * b = " +
    a * b +
    "; a / b = " +
    a / b +
    ";"
);
console.log("--------------------");
console.log("**************");
