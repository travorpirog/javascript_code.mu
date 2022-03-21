"use strict";

// Задача 1
let string1 = 'abcde';
console.log(string1[0] + string1[2] + string1[4]);

// Задача 2
let string2 = 'abcde';
let newString2 = string2[4] + string2[3] + string2[2] + string2[1] + string2[0]; 
console.log(newString2);


// Задача 3 
let str3 = 'abcde';
let num = 3;
console.log(str3[num]);

// Символы строк можно читать, но нельзя изменять. Следующий пример приведет к ошибке:
let str4 = 'abcde';
str4[0] = '!';