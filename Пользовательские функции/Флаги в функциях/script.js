"use strict";

// Задача 1
function isEven(arr) {
    for (let elem of arr) {
        if (elem % 2 != 0) {
            return false;
        }
    }
    return true;
}
let arr = [2, 4, 6, 8, 10];
console.log(isEven(arr));

// Задача 2
function isOdd(num) {
    for(let i = 0; i < String(num).length; i++) {
        if (+String(num)[i] % 2 == 0) {
            return false;
        }
    }
    return true;
}
console.log(isOdd(135));

// Задача 3
function isNext(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            return true;
        }
    }
    return false;
}
arr = ['a', 'a', 'b', 'c', 'd'];
console.log(isNext(arr));