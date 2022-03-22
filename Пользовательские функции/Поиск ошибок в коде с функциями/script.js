"use strict";

// Задача 1
// Код должен найти сумму результатов работы двух функций:
function func1() {
	return 3;
}
function func2() {
	return 5;
}
console.log( func1() + func2() );

// Задача 2
function sum(arr) {
	let res = 0;	
	for (let elem of arr) {
		res += elem;
	}
    return res;
}
console.log(sum([1, 2, 3, 4, 5]));

// Задача 3
let arr = [1, 2, 3, 4, 5];
function func3(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;
	}
	return res;
}
console.log(func3(arr));

// Задача 4
function func14() {
	return 3;
}
function func24() {
	return 5;
}
console.log( func14() + func24() );

// Задача 5
function sum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}	
	return sum;
}
console.log(sum([1, 2, 3, 4, 5]));

// Задача 6
let res = sum6([1, 2, 3, 4, 5]);
function sum6(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
    return sum;
}
console.log(res);

// Задача 7
function add(num) {
	if (num <= 9) {
		return '0' + num;
	}
    return num;
}
console.log(add(9));

// Задача 8
arr = [1, 2, 3, 4, 5];

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}
console.log( sum(arr) );

// Задача 9
let num = 12345;
function getDigitsSum(num) {
	let arr = String(num).split('');
	let sum = 0;
	
	for (let elem of arr) {
		sum += +elem;
	}
	
	return sum;
}
res = getDigitsSum(num);
console.log(res);

