"use strict";

// Задача 1
/* Выведите на экран следующую пирамидку:
xx
xxxx
xxxxxx
xxxxxxxx
xxxxxxxxxx */
let str = '';
for (let i = 0; i < 5; i++) {
    console.log(i);
    str = `${str}xx`;
    document.write(`${str}<br>`);
}

// Задача 2
/*
1
333
55555
7777777
999999999 */
for (let i = 0; i <= 9; i++) {
    let num = '';
    if (i % 2 !== 0){
        for (let j = 0; j < i; j++) {
            num += i;
        }
        document.write(num + '<br>');
    }
}


// Задача 3
// Перевернутые пирамидки
for (let i = 5; i >= 0; i--) {
    str = '';
    for (let j = 0; j < i; j++) {
        str += 'xx';
    }
    document.write(str + '<br>');
}

// Задача 4
for (let i = 9; i >= 0; i--) {
    str = '';
    for (let j = 0; j < i; j++) {
        str += i;
    }
    document.write(str + '<br>');
}