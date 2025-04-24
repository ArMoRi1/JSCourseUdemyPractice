"use strict"

const arr = [8, 12, 33, 4, 15];
// arr[99] = 0;
// arr.pop();
// arr.push(10);
arr.sort(compareNums);
console.log(arr);

function compareNums(a, b){
	return a-b;
}

// arr.forEach(function(item, i, arr) {
// 	console.log(`${i} : ${item} всередині масиву ${arr}`)
// });


// for(let i=0; i < arr.length; i++){
// 	console.log(arr[i]);
// }

// for(let value of arr){
// 	console.log(value);
// }

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));


