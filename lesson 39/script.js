"use strict"

// let number = 5;debugger;

// function logNumber(){
// 	// let number = 4;debugger;
// 	console.log(number);
// }

// number = 6;

// logNumber();debugger;

// number = 8;

// logNumber();debugger;


function createCounter(){
	let counter = 0;
	counter++;

	return counter;
	// const myFunction = function(){
	// 	counter+=1;
	// 	return counter;
	// }
	// return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1,c2,c3);


function createCounter() {
    let counter = 0;
    counter++; // Counter збільшується одразу при виконанні
    return counter;
}

const result = createCounter();
console.log(result); // 1
console.log(result); // 1 (counter завжди буде 1, оскільки createCounter виконується заново кожного разу)
