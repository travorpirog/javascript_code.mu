"use strict";

// Многомерные массивы и объекты можно комбинировать между собой
// Приведем пример объекта, содержащего в себе массивы
let days = {
	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 
		'вс'], 
	'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 
		'sn'], 
};
console.log(days['ru'][2]); // Выведет 'ср'


// В следующем примере приведен массив объектов
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
console.log(users[0].age); // Выведет 31

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
console.log(employees[0].salary + employees[1].salary);


// Задача 2
let students = {
	'boys':  ['Коля', 'Вася', 'Петя'],
	'girls': ['Даша', 'Маша', 'Лена'],
};
console.log(students['boys'][1], students['girls'][2]);