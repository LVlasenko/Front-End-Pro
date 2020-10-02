//1. Вывести в консолько каждый элемент массива при помощи рекурсии
//разбирали как пример во время изучения теории о рекрсии
function loop(array, i) {
  i = i || 0;

  if (array.length == i) {
    return false;
  }

  // console.log(array[i]);
  loop(array, i + 1);
  console.log(array[i]);
}

loop([1, 2, 3, 4]);

console.log("after recursive");

// !!!! ДЗ !!!! Вывести в консоль последовательность чисел в обратном порядке, используя рекурсивный вызов функиции
//row (5) // 5 4 3 2 1

function recursive(row) {
  if (row == 0) {
    return false;
  }
  console.log(row);
  recursive(row - 1);
}
recursive(5);

// Написать рекурсивную функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// сделано на лекции 7 тренером

function sumTo(n) {
  if (n == 1) {
    return 1;
  }

  return n + sumTo(n - 1);
}

console.log(sumTo(1), "1");
console.log(sumTo(2), "2");

console.log(sumTo(3), "3");

// !!!!! ДЗ !!! Написать функция factorial(n) - которая при помощи рекурсии будет считать значение факториала числа n!

function factorial(n) {
  if (n == 1) {
    return n;
  }

  return n * factorial(n - 1);
}

console.log(factorial(3));

// ДЗ (показал тренер на лекции 8) Заполнить массив случайными числами: new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(4)));
var array = new Array(
  new Array(4),
  new Array(3),
  new Array(new Array(6), new Array(4))
);

function arrayFiller(mass) {
  for (var i = 0; i < mass.length; i++) {
    if (Array.isArray(mass[i])) {
      arrayFiller(mass[i]);
    } else {
      console.log(mass[i], "is it array?");
      mass[i] = Math.ceil(Math.random() * 10);
    }
  }

  console.log(mass, "mass");
}

arrayFiller(array);
