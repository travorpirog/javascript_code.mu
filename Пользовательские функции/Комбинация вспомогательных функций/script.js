"use strict";

// Задача 1
function getSum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	
	return sum;
}
function getDigits(num) {
	return String(num).split('');
}
console.log( getSum(getDigits(12345)) );

// Задача 2
// Нахождение среднего арифметического:
function getAvg(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum / arr.length;
}

// Нахождение массива делителей числа:
function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}

    return result;
}
console.log( getDivisors(12) );
console.log( getAvg(getDivisors(12)) );