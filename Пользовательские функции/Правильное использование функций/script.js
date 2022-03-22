"use strict";

// Задача 1
function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}
function allPrimeNumbers(num) {
    let arr = [];
        for (let i = 1; i < num; i++) {
            if (isPrime(i) == true) {
                arr.push(i);
            }
        }
    return arr;
}
console.log(allPrimeNumbers(100));

// Задача 2
function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');
	
	for (let digit of digits) {
		sum += Number(digit);
	}
	
	return sum;
}
function findYears(year) {
    let arr = [];
    for (let i = 0; i < year; i++) {
        if (getDigitsSum(i) == 13) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(findYears(2030));

// Задача 3
let nums = [123, 456, 789];
function reverseNum(num) {
    return String(num).split('').reverse().join('');
}
let result = [];
for (let num of nums) {
	result.push(reverseNum(num));
}
console.log(result); // выведет [321, 654, 987]

// Задача 4
let num1 = 234;
let num2 = 531;

function digitSum(num) {
    let digits = String(num).split('');
    let digitsSum = 0;
    for (let digit of digits) {
        digitsSum += Number(digit);
    }
}
function isMatch(num1, num2) {
    if (digitSum(num1) == digitSum(num2)) {
        return 'суммы цифр совпадают';
    }
    return 'суммы цифр не совпадают';
}
console.log(isMatch(num1, num2));

// Задача 5
nums = [12, 24, 35, 14];
for (let num of nums) {
	console.log(num + ': ' + getDivisors(num).join(', '));
}
function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	
	return result;
}