"use strict"


// function showMessage1(){
// 	console.log('Hello, World!1');
// }
// showMessage1();

let num = 20;
function showMessage(text){
	console.log(text);
	let num = 10;
	console.log(num);
}
showMessage("Hello, World!");
console.log(num);


function calc(a,b){
	return(a+b);
}

console.log(calc(1,2));
console.log(calc(2,3));
console.log(calc(3,4));
console.log(calc(4,5));

function ret(){
	let num=50;
	//
	//
	//
	return num;
}

const anotherNumber = ret();
console.log(anotherNumber);

const logger = function(){
	console.log("Heil, Hidra!");
};
logger();


const calc = (a,b) => a + b;
const calc = (a,b) => {return a + b;}