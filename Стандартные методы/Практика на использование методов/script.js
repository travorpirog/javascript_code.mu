"use strict";

// Задача 1
let str = 'london';
let result = str.slice(str.length - 1).toUpperCase();
console.log(result);

// Задача 2
str = 'london';
result = str.slice(0, 2).toUpperCase();
console.log(result);

// Задача 3
str = 'London';
result = str.slice(0,1).toLowerCase();
console.log(result);

// Задача 4
str = 'word1 word2 word3';
let arr = str.split(' ');
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
str = arr.join(' ');
console.log(str);


// Задача 5
str = 'var_test_text';
arr = str.split('_');
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
str = arr.join('');
console.log(str);

// Задача 6
str = 'var_test_text';
arr = str.split('_');
for (let i = 0; i < arr.length; i++) {
    if (i != 0) {
        arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }
}
str = arr.join('');
console.log(str);


// Задача 7
str = 'Привет';
result = str.split('').reverse().join('');
console.log(result);