"use strict";

// Задача 1
// Увеличьте зарплату каждого на 10%
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let elem in obj) {
    obj[elem] =  obj[elem] + ((obj[elem] * 10) / 100);
}
console.log(obj);


// Задача 2
// Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем 
// работникам, у которых она меньше или равна 400.
obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let elem in obj) {
    if (obj[elem] <= 400){
        obj[elem] =  obj[elem] + ((obj[elem] * 10) / 100);
    }
}
console.log(obj);

// Задача 3 
// С помощью этих массивов создайте новый объект, 
// сделав его ключами элементы первого массива, а значениями - элементы второго.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
obj = {};
for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
}
console.log(obj);

// Задача 4
// Найдите сумму ключей этого объекта и поделите ее на сумму значений.
obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKeys, sumValues, result;
sumKeys = 0;
sumValues = 0;
result = 0;
for (let elem in obj) {
    sumKeys += Number(elem);
    sumValues += obj[elem];
}
result = sumKeys / sumValues;
console.log(result);

// Задача 5
obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
arr1 = [];
arr2 = [];

for (let elem in obj) {
    arr1.push(elem);
    arr2.push(obj[elem]);
}
console.log('Ключи - ' + arr1);
console.log('Значения - ' + arr2);


// Задача 6
// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. 
obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
arr1 = [];
for (let elem in obj) {
    if (String(obj[elem])[0] == 1 || String(obj[elem])[0] == 2) {
        arr1.push(obj[elem]);
    }
}
console.log(arr1);


// Задача 7
// Создайте из этого массива - объект
arr1 = ['a', 'b', 'c', 'd', 'e'];
obj = {};
let counter = 1;
for (let elem of arr1) {
    obj[counter] = elem;
    counter++;
}
console.log(obj);

// Задача 8
arr1 = ['a', 'b', 'c', 'd', 'e'];
obj = {};
counter = 1;
for (let elem of arr1) {
    obj[elem] = counter;
    counter++;
}
console.log(obj);