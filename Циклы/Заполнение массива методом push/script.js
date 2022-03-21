"use strict";


// Метод push() позволяет заполнять массивы более удобным методом.
// Он добавляет к концу массива введенное значение

// Задача 1
let arr = []
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);
console.log(arr)


// Задача 2
arr = [];
for (let j = 1;j <= 10; j++) {
    arr.push(j);
}
console.log(arr)

// Задача 3
arr = [];
for (let i = 0; i < 10; i++) {
    arr.push('x');
}
console.log(arr);

// Заполнение массива элементами из другого массива
// Задача 4
let arrNum = [1, 2, 4, 4, 5, 6, 7, 8, 9, 10];
arr = [];
for (let elem of arrNum) {
    arr.push(elem);
}
console.log(arr);


// Переворот массива. Можно сделать методом reverse. Но в целях обучения делаем циклом
// Задача 5
arr = ['a', 'b', 'c', 'd', 'e'];
let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
}
console.log(newArr);