"use strict";

// Задача 1
// Найдите произведение целых чисел от 1 до 20
let num = 20;
let result = 1;
for (let i = 1; i <= num; i++) {
    result *= i;
}
console.log(result);

// Задача 2
// Найти сумму четных чисел от 2 до 100
num = 100;
result = 0;
for (let i = 2; i <= num; i++) {
    if (i % 2 === 0) {
        result += i;
    }
}
console.log(result);

// Задача 3
// Найти сумму нечетных чисел от 1 до 99
num = 100;
result = 0;
for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        result += i;
    }
}
console.log(result);