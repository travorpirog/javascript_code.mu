"use strict";

// Пусть дан массив:
let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]]; 
// Выведем все его элементы на экран. Для этого запустим 2 вложенных друг в друга цикла
for (let subArr of arr) {
    for (let elem of subArr) {
        console.log(elem);
    }
}

// Задача 1
arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let subArr of arr) {
    for (let elem of subArr) {
        sum += elem;
    }
}
console.log(sum);

// Задача 2
arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
sum = 0;
for (let subArr of arr) {
    for (let subSubArr of subArr) {
        for (let elem of subSubArr) {
            sum += elem;
        }
    }
}
console.log(sum);

// Перебор через обычный for
arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
sum = 0
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		sum += arr[i][j];
	}
}
console.log(sum);

// Задача 3
// Решите предыдущие 2 задачи через for
// Первая предыдущая
arr = [[1, 2, 3], [4, 5], [6]];
sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
console.log(sum);

// Вторая предыдущая
arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}
console.log(sum);