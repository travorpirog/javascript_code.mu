"use strict";

// Пусть дан двухмерный объект
let obj = {
	a: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	b: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	c: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
// Для вывода всех его элементов, необходимо запустить 2 вложенных цикла
// for-in друг в друга
for (let key in obj) {
	let subObj = obj[key];	
	for (let subKey in subObj) {
		console.log(subObj[subKey]);
	}
}


// Задача 1
obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let result = 0;
for (let key in obj) {
    let subObj = obj[key];
    for (let subKey in subObj) {
        result += subObj[subKey];
    }
}
console.log(result);


