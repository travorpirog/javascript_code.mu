"use strict";

// Задача 1
// Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. 
// С помощью цикла for выведите все эти элементы на экран.
let arr = ['a', 'b', 'c', 'd', 'e'];
let result = '';
for (let i = 0; i <= arr.length - 1; i++) {
    result = result + arr[i] + ' ';
}
console.log(result);


// Задача 2
// В коде допущена ошибка
/* let arr = [1, 2, 3, 4, 5];		
for (let i = 0; i <= arr.length; i++) { // Нужно добавить arr.length - 1; Чтобы исключить из последней
	console.log(arr[i]);                   итерации undefined
} */


// Перебор массива и if
// Задача 3
// Вывести четные элементы массива
arr = [1, 2, 3, 4, 5];
result = '';
for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
        result += arr[i];
    }
}
console.log(result);


// Нахождение суммы элементов
// Задача 4
arr = [1, 2, 3, 4, 5];
result = 1;
for (let i = 0; i <= arr.length - 1; i++) {
    result *= arr[i];
}
console.log(result);

// Задача 5
arr = [1, 2, 3, 4, 5];
result = 0;
for (let i = 0; i <= arr.length - 1; i++) {
    result += (arr[i] ** 2);
}
console.log(result);

// Задача 6
arr = [2, 5, 9, 15, 1, 4];
result = '';
for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 10 && arr[i] > 3) {
        result += arr[i] + ' ';
    }
}
console.log(result);

// Задача 7
arr = [-1, -2, 5, 10, 1, 2];
result = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += arr[i];
    }
}
console.log(result);

// Задача 8
arr = [1, 2, 3, 4, 5];
result = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}
console.log(result / arr.length);


// Задача 9 
arr = [10, 20, 30, 50, 235, 3000];
result = '';
for (let i = 0; i < arr.length; i++) {
    let stringArr = String(arr[i]);
    if (stringArr[0] == 1 || stringArr[0] == 2 || stringArr[0] == 5) {
        result += arr[i] + ' ';
    }
}
console.log(result);

// Задача 10
arr = [10, 20, 30, 50, 235, 3000];
result = '';
for (let i = arr.length - 1; i >= 0; i--) {
    result += arr[i] + ' ';
}
console.log(result);

// Задача 11
arr = [10, 1, 30, 23, 4, 3000];
result = '';
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i) {
        result += arr[i] + ' ';
    }
}
console.log(result);

// Задача 12
arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
    document.write(`${arr[i]}<br>`);
}

// Задача 13
arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
    document.write(`<p>Отдельный абзац для - ${arr[i]}</p>`);
}

// Задача 14
arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let i = 0; i < arr.length; i++) {
    if (i <= 4) {
        document.write(`<p>${arr[i]}</p>`);
    } else {
        document.write(`<p><strong>${arr[i]}</strong></p>`);
    }
}

// Задача 15
arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currentDay = 'Воскресенье';
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === currentDay) {
        document.write(`<p><em>${arr[i]}</em></p>`)
    } else {
        document.write(`<p>${arr[i]}</p>`);       
    }
}