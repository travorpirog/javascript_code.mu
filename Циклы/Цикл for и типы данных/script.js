"use strict";

// Задача 1
let num = 1000;
let str = '';
for (let i = 10; i <= 1000; i++) {
    str = String(i);
    if (Number(str[0]) + Number(str[1]) == 5) {
        document.write(`${str} <br>`);
    }
}

// Задача 2
num = 30;
let result = '';
for (let i = 1; i <= num; i++) {
    str = String(i);
    result += str;
}
console.log(result);