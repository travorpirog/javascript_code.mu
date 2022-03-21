"use strict";

// Задача 1
console.log(Math.pow(2, 10));

// Задача 2
console.log(Math.sqrt(245));

// Задача 3
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let elem of arr) {
    sum += Math.pow(elem, 3);
}
console.log(Math.sqrt(sum));

// Задача 4
let num = Math.sqrt(379);
console.log(num.toFixed(), num.toFixed(1), num.toFixed(2));

// Задача 5
num = Math.sqrt(587);
console.log('ceil - ' + Math.ceil(num), 'floor - ' + Math.floor(num));

// Задача 6
console.log(Math.max(4, -2, 5, 19, -130, 0, 10), Math.min(4, -2, 5, 19, -130, 0, 10));

// Задача 7
console.log((Math.random() * 100).toFixed());

// Задача 8
arr = [];
for (let i = 0; i < 9; i++) {
    arr[i] = (Math.random() * 100).toFixed();
}
console.log(arr);

// Работа с модулем
let a = 2;
let b = 10;

console.log(Math.abs(a - b));