"use strict";

// Задача 1
//Код должен проверить сумму чисел:
let num1 = 1;
let num1_1 = 2;
if (num1 + num1_1 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

// Задача 2 
let num2 = 1;
let num21 = 2;
if (num2 + num2 === num21) {
	console.log('+++');
} else {
	console.log('---');
}

// Задача 3
let num13 = '1';
let num23 = '2';
if (Number(num13) + Number(num23) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

// Задача 4
let num14 = '1';
let num24 = '2';
if (Number(num14) + Number(num24) === 3) {
	console.log('+++');
} else {
	console.log('---');
}


// Задача 5
let num5 = 123;
if (Number(String(num5)[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
}


// Задача 6
let num6 = 123;
if (Number(String(num6)[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
}

// Задача 7
let num7 = 123;
let first7 = String(num7)[0];
if (Number(first7) === 1) {
	console.log('+++');
} else {
	console.log('---');
}

// Задача 8
let num8 = 12;
if (String(num8).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// Задача 9
let num9 = 12;
let str9 = String(num9);
if (str9.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// Задача 10
let num10 = 12;
if (String(num10).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// Задача 11
let num11 = 12;
if (String(num11).length == String(2)) {
	console.log('+++');
} else {
	console.log('---');
}

// Задача 12 
let num12 = 12;
if (String(num12).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// Задача 13
let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам 

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}