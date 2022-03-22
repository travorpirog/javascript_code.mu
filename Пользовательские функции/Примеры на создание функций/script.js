"use strict";

// Задача 1
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
function sumQuad(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += (num[i] ** 2);
    }
    return sum;
}
console.log(sumQuad(arr1));
console.log(sumQuad(arr2));

// Задача 2
function getDigitsSum(num) {
    let sum = 0;
    for (let i = 0; i < String(num).length; i++) {
        sum += +String(num)[i];
    }
    return sum;
}
console.log(getDigitsSum(1234)); // Должно вывести 10

// Задача 3
function getDivisors(num) {
    let arr = [];
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result = num / i;
        if (result % 2 == 0) {
            arr.push(i);
        } else if (i == num) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(getDivisors(1500));


// Задача 4
function reverseStr(str) {
    return str.split('').reverse().join('');
}
console.log(reverseStr('Привет'));

// Задача 5
let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3];
function delElem(word, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == word) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
console.log(delElem(2, arr));


// Задача 6
function addElem(count) {
    arr = [];
    for (let i = 0; i < count; i++) {
        arr[i] = i + 1;
    }
    return arr;
}
console.log(addElem(10));

// Задача 7
function addElem2(countStart, countFinish) {
    arr = [];
    for (let i = 0; i < (countFinish - countStart) + 1; i++) {
        arr[i] = countStart + i;
    }
    return arr;
}
console.log(addElem2(3, 7));