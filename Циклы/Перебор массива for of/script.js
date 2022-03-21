"use strict";

// В ES6 появился новый цикл for-of
// Синтаксис цикла:
/*
    for (let переменнаяДляЭлемента of массив) {
        В переменнуюДляЭлемента по очереди
		будут попадать элементы перебираемого массива.
    }
*/

// Задача 1
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let arrItem of arr) {
    document.write(`${arrItem} `);
}
document.write(`<br>`);
// Задача 2
arr = [1, 2, 3, 4, 5];
let result = 0;
for (let arrItem of arr) {
    result += arrItem;
}
console.log(result);

// Как понять, когда какой цикл использовать?
// Все просто, если номера массивов нужны, то for
// а если не нужны то for-of

// Задача 3
let months = ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];
for (let month of months) {
    document.write(`${month} `);
}

document.write(`<br>`);

// Задача 4
months = ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];
let month = 10;
for (let i = 0; i < months.length; i++) {
    if (months[i] === months[month]) {
        document.write(`<em>${months[i]}</em> `);
    } else {
        document.write(`${months[i]} `);
    }
}