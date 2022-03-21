"use strict";

// Задача 1
// С помощью двух вложенных циклов выведите на экран следующую строку:
let num = 9;
for (let i = 1; i <= num; i++) {
    for (let j = 1; j < 4; j++) {
        document.write(`${i}`);
    }
}

document.write(`<br>`)

// Задача 2
num = 3;
let str = '';
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j < 4; j++) {
        str += (String(i) + String(j) + ' ');
    }
}
document.write(`${str}`);