"use strict";

// Флаг - специальная переменная, которая может принимать только 2 значения: true или false;
// Задача 1
// Проверьте, что в этом массиве есть элемент 'c'. 
// Если есть - выведите 'да', а если нет - выведите 'нет'.
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
    if (elem == 'c') {
        flag = true;
        break;
    }
}

if (flag == true) {
    console.log('есть');
} else {
    console.log('нет');
}