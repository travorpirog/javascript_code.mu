"use strict";

// С помощью оператора in можно проверять наличие свойства в объекте.
let obj = {a: 1, b: 2, c: 3}
console.log('a' in obj); // Выведет true

/* Задача 1⋕js.Pm.Cl.OI.1
Скажите, что выведется в консоль в результате выполнения следующего кода: */
let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
console.log('e' in obj1); // true
console.log('f' in obj1); // false