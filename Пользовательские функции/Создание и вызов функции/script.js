"use strict";

// Функци создается с помощью команды function
// Синтаксис:
/* function () {
    свой код
} */

// Задача 1
function yourName() {
    console.log('Ваше имя');
}
yourName();

// Задача 2
function sumNum() {
    let result = 0;
    for (let i = 1; i <= 100; i++) {
        result += i;
    }
    console.log(result);
}
sumNum();