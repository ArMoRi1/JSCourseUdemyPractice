'use strict';

// const num = new Number(3);


function User(name, age){
	this.name = name;
	this.age = age;
	this.human = true;
	this.hello = function(){
		console.log('hello, ' + this.name);
	};
}

User.prototype.exit = function(name){
	console.log(`User ${this.name} left`);
};


const Ira = new User('Ira', 17);
const Art = new User('Art', 19);
Art.hello();
Ira.hello();
Art.exit();

console.log(Ira);
console.log(Art);