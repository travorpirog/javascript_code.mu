"use strict";

// Задача 1
/* В переменной month лежит какое-то число из интервала от 1 до 12. 
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). */

let month = 1;

if ( month === 12 || month > 0 && month <= 2) {
    console.log('Зима');
} else if (month >= 9 && month <= 11) {
    console.log('Осень');
} else if (month >= 6 && month <= 8) {
    console.log('Лето');
} else if (month >= 3 && month <= 5) {
    console.log('Весна');
}


// Задача 2
/* Дана строка, состоящая из символов, например, 'abcde'. 
Проверьте, что первым символом этой строки является буква 'a'. 
Если это так - выведите 'да', в противном случае выведите 'нет'. */

let str2 = 'abcde';

if (str2[0] === 'a') {
    console.log('да');
} else {
    console.log('нет')
}


// Задача 3
/* Дано число, например, 12345. 
Проверьте, что первым символом этого числа является цифра 1, 2 или 3. 
Если это так - выведите 'да', в противном случае выведите 'нет'. */

let num3 = 12345;
if (String(num3)[0] == 1 || String(num3)[1] == 2 || String(num3)[2] == 3) {
    console.log('да')
} else {
    console.log('нет')
}


// Задача 4
/* Дано трехзначное число. Найдите сумму цифр этого числа. */

let num4 = 123;
if (String(num4).length === 3) {
    console.log('Результат сложения: ' + (Number(String(num4)[0]) + Number(String(num4)[1]) + Number(String(num4)[2])));
} else {
    console.log(String(num4).length + ' значное число')
}


// Задача 5
/* Дано число из 6-ти цифр. 
Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
Если это так - выведите 'да', в противном случае выведите 'нет'. */
let num5 = 113321;
let sum51 = Number(String(num5)[0]) +  Number(String(num5)[1]) +  Number(String(num5)[2]);
let sum52 = Number(String(num5)[3]) +  Number(String(num5)[4]) +  Number(String(num5)[5]);

if (sum51 === sum52) {
    console.log('да');
} else {
    console.log('нет')
}