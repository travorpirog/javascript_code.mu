"use strict";

/* Задача 1
Код должен найти сумму цифр числа: */
let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}
console.log(sum);

/* Задача 2
Код должен найти сумму цифр числа: */
num = 12345;
arr = String(num).split('');
sum = 0;
for (let digit of arr) {
	sum += +digit;
}
console.log(sum);

/* Задача 3
Код должен найти сумму цифр числа: */
num = 12345;
arr = String(num).split('');
sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}
console.log(sum); // почему-то выводит 5, а не 15


/* Задача 4
Код должен найти сумму цифр числа: */
num = 12345;
arr = String(num).split('');
sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}
console.log(sum);


/* Задача 5
Код должен найти произведение цифр числа: */
num = 12345;
arr = String(num).split('');
let prod = 1;
for (let digit of arr) {
	prod *= digit;
}
console.log(prod);

