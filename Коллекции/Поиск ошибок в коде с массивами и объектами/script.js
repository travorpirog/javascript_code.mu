"use strict";

/* Задача 1⋕js.Pm.Cl.Mst.1
Код должен вывести последний элемент массива: */
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1[arr1.length - 1]);

/* Задача 2⋕js.Pm.Cl.Mst.2
Код должен найти сумму элементов массива: */
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2[0] + arr2[1] + arr2[2] + arr2[3] + arr2[4]); 

/* Задача 3⋕js.Pm.Cl.Mst.3
Код должен вывести длину массива: */
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.length);

/* Задача 4⋕js.Pm.Cl.Mst.4
Код должен вывести элемент объекта: */
let obj = {a: 1, b: 2, c: 3};
console.log(obj['a'], obj.a); // оба способа верны

/* Задача 5⋕js.Pm.Cl.Mst.5
Код должен вывести элемент объекта по ключу из переменной: */
let obj5 = {a: 1, b: 2, c: 3};
let key5 = 'a';
console.log(obj5[key5]);


/* Задача 6⋕js.Pm.Cl.Mst.6
Код должен вывести сумму элементов объекта: */
let obj6 = {a: 1, b: 2, c: 3};
let sum = obj6.a + obj6.b + obj6.c;
console.log(sum);


/* Задача 7⋕js.Pm.Cl.Mst.7
Код должен вывести количество элементов объекта: */
let obj7 = {a: 1, b: 2, c: 3};
let arr7 = [];
arr7[0] = obj7.a;
arr7[1] = obj7.b;
arr7[2] = obj7.c;
console.log(arr7.length);