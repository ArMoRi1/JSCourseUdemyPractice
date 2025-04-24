"use strict"

//&&

// let hamburger = true;
// let fries  = true;

// if(hamburger && fries){
// 	console.log("i am not hungry now");
// }

// console.log(hamburger && fries);

//||

// let hamburger = true;
// let fries  = false;

// if(hamburger && fries){
// 	console.log("i am not hungry now");
// }
// else if(hamburger || fries){
// 	console.log("it was tasty, but i need more!");
// }
// else{
// 	console.log("i am still hungry:(");
//}

let hamburger = 2;
let fries = 3;
let cola = 0;
let nuggets = 2

if(hamburger === 3 && cola === 2 || fries === 3 && nuggets){
	console.log("all of us are happy now:)");
}
else{
	console.log("we go to another restraunt!!!")
};

console.log(1&&0);
console.log(1&&5);
console.log(null && 5);
console.log(0 && '123');

console.log(!'!');