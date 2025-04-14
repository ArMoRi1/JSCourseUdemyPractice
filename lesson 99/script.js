'use strict';

class User{
	constructor(name,age){
		this.name = name;
		this._age = age;
	}

	#surname = 'maybeOneDayMochalova';

	say(){
		console.log(`User's name is ${this.name} ${this.surname}, age is ${this._age}`);

	}
	get age(){
		return this._age;
	}
	set age(age){
		if(typeof age === 'number' && age>0 && age<110){
			this._age = age;
		}else{
			console.log('u typed smth wrong!!!');
		}
	};

	get surname(){
		return this.#surname;
	}
	set surname(surname){
		if(typeof(surname) === 'string'){
			this.#surname = surname;
		}else{
			console.log('smth went wrong!!!')
		}
	}
}

const ira = new User('Ira', 17);

// console.log(ira.age);
//
// ira.age = 99;
//
// console.log(ira.age);
console.log(ira.surname);
ira.surname = 'forSureMochalova';
console.log(ira.surname);

// ira.say();
