"use strict";

// Пример перебора массива
let users = [
	{
		name: 'name1',
		age: 31,
	},
	{
		name: 'name2',
		age: 32,
	},
	{
		name: 'name3',
		age: 33,
	},
];
for (let user of users) {
    document.write(user.name + ' ' + user.age + '<br>');
}

// Задача 1
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
for (let employee of employees) {
    document.write(employee.name + ' - ' + employee.salary + '<br>');
}

// Задача 2
employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
let sum = 0;
for (let employee of employees) {
    sum += employee.salary;
}
document.write(sum + '<br>');

// Задача 3
employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
for (let employee of employees) {
    if (employee.age > 30) {
        document.write(employee.salary + '<br>');
    }
}

employees = [
	{
		name: 'name1',
		salary: 300,
		dismissed: false,
	},
	{
		name: 'name2',
		salary: 400,
		dismissed: true,
	},
	{
		name: 'name3',
		salary: 500,
		dismissed: false,
	},
	{
		name: 'name4',
		salary: 600,
		dismissed: true,
	},
	{
		name: 'name5',
		salary: 700,
		dismissed: false,
	},
];
for (let employee of employees) {
    if (!employee.dismissed) {
        document.write(employee.name + ' - ' + employee.salary + '<br>');
    }
}


// Сложные структуры
// Задача 5
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
		'data34',
		'data35',
	],
	4: [
		'data41',
		'data42',
	],
};
for (let dataElem in data) {
    for (let arrElem of data[dataElem]) {
        console.log(arrElem);
    }
}

// Задача 6
data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
		4: 'data14',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
	},
];
for (let dataElem of data) {
    for (let arrElem in dataElem){
        console.log(dataElem[arrElem]);
    }
}

// Задача 7
data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
			'data224',
		],
		3: [
			'data231',
			'data232',
			'data233',
			'data234',
			'data235',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
		],
	},
];
for (let dataArr of data) {
    for (let objElem in dataArr) {
        for (let arrElem of dataArr[objElem]) {
            console.log(arrElem);
        }
    }
}