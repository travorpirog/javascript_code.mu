"use strict";

// Задача 1
const hourPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;
let secondsPerDay = hourPerDay * minutesPerHour * secondsPerMinute;
console.log(secondsPerDay);

// Задача 2
const countDays = 30;
let secondsPerMonth = countDays * secondsPerDay;
console.log(secondsPerMonth);

// Задача 3
const countMonths = 12;
let secondsPerYear = secondsPerMonth * countMonths;
console.log(secondsPerYear);

// Задача 4
let minutesPerDay = secondsPerDay / secondsPerMinute;
console.log(minutesPerDay);

// Задача 5
let minutesPerYear = secondsPerYear / secondsPerMinute;
console.log(minutesPerYear);

// Задача 6
const bytePerKbyte = 1024;
const kbytePerMbyte = 1024;
let bytePerMbyte = bytePerKbyte * kbytePerMbyte;
console.log(bytePerMbyte);

// Задача 7
const mbytePerGbyte = 1024;
let bytePerGbyte = mbytePerGbyte * bytePerMbyte;
console.log(bytePerGbyte);

// Задача 8
const countGbyte = 10;
let bytePerCountGbyte = countGbyte * bytePerGbyte;
console.log(bytePerCountGbyte);

// Задача 9
const gbytePerTbyte = 1024;
let bytePerTbyte = gbytePerTbyte * bytePerGbyte;
console.log(bytePerTbyte);

// Задача 10
let kbytePerTbyte = bytePerTbyte / bytePerKbyte;
console.log(kbytePerTbyte);