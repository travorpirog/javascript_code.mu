"use strict";


// Задача 1
let obj = {};
obj[1] = 'Понедельник';
obj[2] = 'Вторник';
obj[3] = 'Среда';
obj[4] = 'Четверг';
obj[5] = 'Пятница';
obj[6] = 'Суббота';
obj[7] = 'Воскресенье';
console.log(obj);


// Задача 2
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
let arr2 = [1, 2, 3, 4, 5, 6, 7];
obj = {};

for (let i = 0; i < arr1.length; i++) {
    obj[arr2[i]] = arr1[i];
}
console.log(obj);

// Задача 3
arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
arr2 = [1, 2, 3, 4, 5, 6, 7];
obj = {};
for (let i = 0; i < arr1.length; i++) {
    obj[`${arr1[i]}`] = arr2[i];
}
console.log(obj);


// Заполнение объекта из другого объекта
// Задача 4
obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
let objNew = {};
for (let newElem in obj) {
    if (obj[newElem] >= 10 && obj[newElem] <= 20) {
        objNew[newElem] = obj[newElem];
    }
}
console.log(objNew);

// Задача 5
// Запишите дни недели, номера которых являются четными числами
obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'}; 
objNew = {};

for (let newElem in obj) {
    if (newElem % 2 == 0) {
        objNew[newElem] = obj[newElem];
    }
}
console.log(objNew);


// Изменение объекта в цикле
// Задача 6
obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
for (let elem in obj) {
    obj[elem] = obj[elem] ** 2;
}
console.log(obj);

// Смена ключей и значений местами
// Задача 7
obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
objNew = {};

for (let newElem in obj) {
    objNew[obj[newElem]] = newElem;
}
console.log(objNew);