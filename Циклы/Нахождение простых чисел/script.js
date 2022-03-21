"use strict";

// Найдем простые числа до 31;
// Простое число - это такое число, которое делится только на само себя или на 1
let num = 31;
let flag = true;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        flag = false;
        break;
    }
}

if (flag == true) {
    console.log('Число не является простым');
} else {
    console.log('Число является простым');
}