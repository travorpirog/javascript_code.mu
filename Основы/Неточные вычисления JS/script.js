"use strict";

// Метод .toFixed(), необходим до округления чисел до заданного знака. Он отдает результат в виде строки
let a = 0.1 + 0.2;
console.log(a.toFixed(2)) // => '0.30'
// Можно преобразовать его в число. Пример:
console.log(+a.toFixed(2)); // => 0.30


// Задача 1
console.log(0.1 * 0.2);
console.log(+(0.1 * 0.2).toFixed(2));

// Задача 2
console.log(0.3 - 0.1);
console.log(+(0.3 - 0.1).toFixed(2));