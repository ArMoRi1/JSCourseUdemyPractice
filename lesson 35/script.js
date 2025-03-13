"use strict"

let str = "some";

let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,4]);

const soldier ={
	health : 400,
	armor : 100,
	saySirYesSir: function(){
		console.log("Sir, yes, sir!");
	},
};

const John = Object.create(soldier);


// old prototype
// John.__proto__ = soldier;

// Object.setPrototypeOf(John,  soldier);


John.saySirYesSir();