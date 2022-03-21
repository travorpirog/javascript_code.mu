"use strict";

// Задача 1
// С помощью цикла сформируйте следующий массив:
// ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']

let arr = [];
let str = '';
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        str += 'xx';
        arr.push(str);
    }
}
console.log(arr);


// Задача 2
arr = [];
for (let i = 1; i < 6; i++) {
    str = '';
    for (let j = 1; j < 6; j++) {
        str += i;
    }
    arr.push(str);
}
console.log(arr);