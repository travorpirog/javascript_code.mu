"use strict";

// Числа в строках суммируются, как строки. Для суммирования чисел нужно использовать Number()
let test = '12345';
console.log(test[0] + test[1]); // Выведет 12
console.log(Number(test[0]) + Number(test[1])); // Выведет 3

// Задача 1
// Найти сумму цифр строки
console.log(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4])); // => 15

// Обращение к цифрам числа. Для обращения к числам нужно использовать String()
let testSecond = 12345;
console.log(testSecond[0]); // Выведет undefined
testSecond = String(testSecond);
console.log(testSecond[0]); // Выведет 1

// Задача 2
let test2 = 12345;
test2 = String(test2);
console.log(Number(test2[0]) + Number(test2[1]) + Number(test2[2]) + Number(test2[3]) + Number(test2[4])); // => 15

// Задача 3
let test3 = '12345';
console.log(test3[0] * test3[1] * test3[2] * test3[3] * test3[4]); // => 100

// Задача 4
let test4 = 12345;
test4 = String(test4);
test4 = test4[4] + test4[3] + test4[2] + test4[1] + test4[0];
console.log(test4);