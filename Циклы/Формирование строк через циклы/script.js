"use strict";

// Задача 1
// Сформируйте строку сформированную 5-ю нулями
let str = '';
for (let i = 0; i < 5; i++) {
    str += 0;
}
console.log(str);


// Задача 2
str = '';
for (let i = 1; i < 10; i++) {
    str += i;
}
console.log(str);

// Задача 3
str = '';
for (let i = 9; i > 0; i--) {
    str += i;
}
console.log(str);

// Задача 4
str = '-';
for (let i = 1; i < 10; i++) {
    str += i + '-';
}
console.log(str)