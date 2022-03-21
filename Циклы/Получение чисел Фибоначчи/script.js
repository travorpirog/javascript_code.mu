"use strict";

let one = 0;
let two = 1;

for (let i = 1; i <= 10; i++) {
	let current = one + two;
	
	one = two;
    console.log(i + '-я итерация - Переменная one: ' + one);
	two = current;
    console.log(i + '-я итерация - Переменная two: ' + two);
	
	console.log(i + '-я итерация - Переменная current: ' + current);
}


// Задача 2
// Решите задачу на нахождение ряда чисел, 
// каждое из которых равно сумме трех предыдущих, 
// а первые три числа равны 0, 1 и 2.

for (let i = 3; i <= 100; i++) {
    let result = 0;
    if (!(i < 3)) {
        result = (i - 3) + (i - 2) + (i - 1);
    }
    console.log(`Текущее число - ${i}. Предыдущие числа - ${i - 3}, ${i - 2}, ${i - 1}, результат суммы - ${result}`);
}