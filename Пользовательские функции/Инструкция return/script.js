"use strict";

// Функция return нужна для того, чтобы указать значение переменной, 
// которое возвращает функция

function func(num) {
    return num ** num; // Записывает значение
}
let result = func(2);
// После этого с значением переменной можно делать все, что угодно


// Задача 1
function qubeNum(num) {
    return num ** 3;
}
result = qubeNum(3);
console.log(result); // Выведет 27


/* Задача 2
Сделайте функцию, которая параметром принимает число, 
а возвращает квадратный корень из этого числа. 
С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. 
Просуммируйте полученные результаты и выведите их на экран. */

function someNum(num) {
    return Math.sqrt(num);
}
result = someNum(3) + someNum(4);
console.log(result);


/* Задача 3⋕js.Pm.UF.Rt.3
Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, 
округляющая дробь до трех знаков в дробной части: */
function sqrt(num) {
	return Math.sqrt(num);
}
function round(num) {
	return num.toFixed(3);
}
/* С помощью этих функций найдите квадратный корень из числа 2 
и округлите его до трех знаков в дробной части. */
result = round(sqrt(5));
console.log(result);



// Задача 4
function sqrt(num) {
	return Math.sqrt(num);
}
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
result = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(result);

// Задача 5
function round(num) {
	return num.toFixed(3);
}
result = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(result);


/* Задача 9
Что выведется на экран в результате выполнения следующего кода: */
function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
    return sum;
}

console.log( func(5) );


/* Задача 10
Напишите функцию, которая параметром будет принимать число и делить его 
на 2 столько раз, пока результат не станет меньше 10. 
Пусть функция возвращает количество итераций, которое потребовалось для 
достижения результата. */
function countIter(num) {
    let counter = 0;
    while (true) {
        num /= 2;
        if (num < 10) {
            return counter;
        }
        counter++;
    }
}
console.log( countIter(500) );


/* Задача 11
Дана следующая функция:
Перепишите ее в сокращенной форме согласно изученной теории. */
function func(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}
console.log(func(-5, 5));


