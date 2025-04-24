"use strict"

// to string
//1)
console.log(typeof(String(null))); 

//2)
console.log(typeof(String(5 + ''))); 

const fontSize = 26 + 'px';


//to number
//1)

console.log(typeof(Number('4')))

//2)
console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt("15px", 10)));
let answer = +prompt("Hello", "");


//to boolean

//1)

// 0, '', null, undefined, NaN

let switcher = null;

if(switcher){
	console.log("true")
}

switcher = 5;
if(switcher){
	console.log("true")
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!"444"));




