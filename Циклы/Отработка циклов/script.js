"use strict";

// Задача 1
// Выведите с помощью цикла столбец чисел от 1 до 100.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Задача 2
for (let i = 100; i > 0; i--) {
    console.log(i);
}

// Задача 3
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Задача 4
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push('x');
}
console.log(arr);

// Задача 5
arr = [];
for (let i = 0, j = 1; i < 10, j <= 10; i++, j++) {
    arr[i] = j;
}
console.log(arr);

// Задача 6
// Дан массив с числами. 
// С помощью цикла выведите только те элементы массива, 
// которые больше нуля и меньше 10-ти.
arr = [1, 12, 4, 6, 13, 20, 9, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i]);
    }
}

// Задача 7
arr = [1, 12, 4, 6, 5, 20, 9, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
        console.log('+++');
        break;
    }
}

// Задача 8
arr = [1, 12, 4, 6, 5, 20, 9, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

// Задача 9
arr = [1, 12, 4, 6, 5, 20, 9, 10];
sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += (arr[i] ** 2);
}
console.log(sum);

// Задача 10
arr = [1, 12, 4, 6, 5, 20, 9, 10];
let count = 0;
sum = 0;
let result = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    count++;
}
result = sum / count;
console.log(result);


// Задача 11
count = 1;
result = 1;
while (count <= 10) {
    result *= count;
    count++;
}
console.log(result);