"use strict";

// Перебор объекта циклом for-in
// Цикл for-of предназначен для массивов, а for-in для объектов
// Синтаксис:
/* 
    for (let переменнаяДляКлюча in объект) {

    }
*/

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let result = 0;
for (let objKey in obj) {
    result += obj[objKey];
}
console.log(result);