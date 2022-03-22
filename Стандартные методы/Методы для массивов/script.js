"use strict";

// Задача 1
let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

// Задача 2
arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

// Задача 3
arr = [1, 2, 3];
console.log(arr.shift());

// Задача 4
arr = [1, 2, 3];
console.log(arr.pop());

// Задача 5
arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0,3));

// Задача 6
arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3, 5));

// Задача 7
arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

// Задача 8
arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);

// Задача 9
arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(arr.length, 0, 'e');
console.log(arr);

// Задача 10
arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3));

// Задача 11
arr = [1, 2, 3, 4, 5];
let isTrue = arr.includes(3) ? console.log('+') : console.log('-');