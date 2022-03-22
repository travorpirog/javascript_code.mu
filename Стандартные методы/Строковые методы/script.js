"use strict";

// Задача 1
let str = 'js';
console.log(str.toUpperCase());

// Задача 2
str = 'JS';
console.log(str.toLowerCase());

// Задача 3
str = 'я учу javascript!';
console.log(str.substr(2, 3));
console.log(str.substring(2, 5));
console.log(str.slice(6, str.length - 1));

// Задача 4
str = 'abcde';
console.log(str.indexOf('c')); // Выведет 2

// Задача 5
console.log(str.indexOf('a')); // Выведет 0

// Задача6
if (str.indexOf('a') == 0) {
    console.log('+++'); // Проверить начинается ли строка с a
} else {
    console.log('---');
}

// Задача 7
if (str.lastIndexOf('a') == str.length - 1) {
    console.log('+++');
} else {
    console.log('---');
}

// Задача 8
str = 'http://vk.com';
let lastWord = str.lastIndexOf('/') + 1;
if (str.substring(0, lastWord) == 'http://') {
    console.log('+++');
} else {
    console.log('---');
}

// Задача 9
str = 'https://vk.com/gallery/index.html';
lastWord = str.lastIndexOf('.');
if (str.substring(lastWord, str.length) == '.html') {
    console.log('+++');
} else {
    console.log('---');
}

// Задача 10
str = 'http://vk.com';
let isTrue = str.startsWith('http://') ? console.log('+') : console.log('-');

// Задача 11
str = 'http://vk.com/news/index.html';
isTrue = str.endsWith('.html') ? console.log('+') : console.log('-');

// Задача 12
str = '1-2-3-4-5';
console.log(str.split('-'));

// Задача 13
str = '12345';
console.log(str.split(''))

// Задача 14
let arr = [1, 2, 3, 4, 5];
console.log(arr.join('-'));