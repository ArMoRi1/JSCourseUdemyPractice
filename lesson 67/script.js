"use strict";

// const now = new Date();
// const now = new Date(2025, 3, 24, 20);
const now = new Date(1742843260903);
// new Date.parse('2024-03-24');

console.log(now.setHours(40));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();
for(let i=0; i< 100000; i++){
	let some = i **3;
}
let end = new Date();


console.log("Початок циклу:" + start);
console.log("Кінець  циклу:" + end);

console.log("Різниця у мілісекундах:" + (end - start));