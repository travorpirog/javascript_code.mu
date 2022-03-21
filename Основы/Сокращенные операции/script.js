"use strict";

// Сокращенные операции нужны, когда нужно в переменную записать ее текущее значение
let num = 1;
num += 3; // эквивалентно num = num + 3;
num -= 3; // эквивалентно num = num - 3;
num *= 3; // эквивалентно num = num * 3;
num /= 3; // эквивалентно num = num / 3;


// Задача 1
let num1 = 47;
/* num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
alert(num); */
num1 += 7; // 54
num1 -= 18; // 36
num1 *= 10; // 360
num1 /= 15; // 24
console.log(num1);
