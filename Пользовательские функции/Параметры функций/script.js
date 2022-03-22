"use strict";

// Параметры функций указываются внутри круглых скобок
// func(параметр);

// Задача 1
function qubeNum(num) {
    let result = num ** 3;
    console.log(result);
}
qubeNum(12);

// Задача 2
function isPositive(num) {
    if (num >= 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}
isPositive(1);
isPositive(-1);

// Задача 3
function sumNum(num1, num2, num3) {
    let result = num1 + num2 + num3;
    console.log(result);
}
sumNum(4, 5, 2);

// Задача 4
function func(a, b, c) {
    let result = a + b + c;
    console.log(result);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
func(param1, param2, param3);

/* Задача 5
Дана функция: */
// function func(num = 5) {
//      alert(num * num);
// }
//Эта функция вызывается следующим образом:
// func(2); // Выведется - 4
// func(3); // Выведется - 9
// func(); // Выведется - 25
//Расскажите, каким будет результат каждого из вызовов функции.

/* Задача 6 
Дана функция: */
// function func(num1 = 0, num2 = 0) {
// 	alert(num1 + num2);
// }
// Эта функция вызывается следующим образом:
// func(2, 3); // Выведет 5
// func(3); // Выведет - 3
// func(); // Выведет - 0
// Расскажите, каким будет результат каждого из вызовов функции.