"use strict";

// Задача 1
// Код должен вывести числа от 0 до 10
let str = '';
for (let i = 0; i <= 10; i++) {
	str += i + ' ';
}
console.log(str);

// Задача 2
str = '';
for (let i = 10; i >= 0; i--) {
	str += i + ' ';
}
console.log(str);

// Задача 3
str = '';
for (let i = 10; i >= 0; i--) {
	str += i + ' ';
}
console.log(str);

// Задача 4
let i = 0;
str = '';
while (i <= 10) {
	str += i + ' ';
	i++;
}
console.log(str);

// Задача 5
let res = 0;
for (let i = 1; i <= 10; i++) {
	res += i;
}
console.log(res);

// Задача 6
res = 1;
for (let i = 1; i <= 10; i++) {
	res *= i;
}
console.log(res);

// Задача 7
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
	sum += +elem;
}
console.log(sum); // должно вывести 15

// Задача 8
arr = ['1', '2', '3', '4', '5'];
sum = 0;
for (let elem of arr) {
	sum += +elem;
}
console.log(sum); // должно вывести 15


// Задача 9
arr = ['1', '2', '3', '4', '5'];
sum = 0;
for (let elem of arr) {
	sum += +elem;
}
console.log(sum); // должно вывести 15

// Задача 10
arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит NaN


// Задача 11
arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит не 15


// Задача 12
arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит не 15


// Задача 13
arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
}
console.log(arr);

// Задача 14
arr = [];

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}
console.log(arr);

// Задача 15
let obj = {a: 1, b: 2, c: 3};
sum = 0;

for (let elem in obj) {
	sum += obj[elem];
}

console.log(sum);


// Задача 16
obj = {a: 1, b: 2, c: 3};
sum = 0;
for (let key in obj) {
	sum += obj[key];
}

console.log(sum);


// Задача 17
arr = [1, 2, 3, 4, 5];
res = '';
for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
        break;
	} else {
		res = '---';
	}
}
console.log(res);


// Задача 18
arr = [1, 2, 3, 4, 5];
res = false;
for (let elem of arr) {
	if (elem === 3) {
		res = true;
		break;
	}
}
console.log(res);


// Задача 19
arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
}