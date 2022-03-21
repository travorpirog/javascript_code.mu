"use strict";

// Задача 1
let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr[6] = 7;
arr[7] = 8;
arr[8] = 9;
arr[9] = 10;
console.log(arr);

// Задача 2
arr = [];
for (let i = 0, j = 1; i <= 99, j <= 100; j++, i++) {
    arr[i] = j;
}
console.log(arr);

// Задача 3
arr = [];
for (let i = 0, j = 1; i <= 99, j < 100; i++, j+=2) {
    arr[i] = j;
}
console.log(arr);