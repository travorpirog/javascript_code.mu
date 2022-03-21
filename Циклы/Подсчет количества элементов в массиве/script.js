"use strict";

// Задача 1
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;
for (let elem of arr) {
    if (arr[elem] == 3) {
        counter++;
    }
}
console.log(counter);

// Задача 2
arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
counter = 0;
let counter2 = 0;
for (let elem of arr) {
    if (arr[elem] == 3) {
        counter++;
    }
    if (arr[elem] == 2) {
        counter2++;
    }
}
console.log(counter, counter2);


// Задача 3 
// Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.
let str = 'Пойдем дальше';
let obj = {};
counter = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }
}
console.log(obj);


