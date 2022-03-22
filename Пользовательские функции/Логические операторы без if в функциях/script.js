"use strict";

// Задача 1
function func(a, b) {
    return a == b;
}
console.log(func(2, 3));

// Задача 2
function func2(a, b) {
	return a != b;
}
console.log(func2(3, 2));

// Задача 3
function func3(a, b) {
    let result = a + b;
	return result >= 10;
}
console.log(func3(2, 6));

// Задача 4
function func4(num) {
	return num >= 0;
}
console.log(func4(0));