'use strict';

const  person = {
	name : 'Ira',
	age : 17,

	get userAge(){
		return this.age;
	},

	set userAge(num){
		this.age = num;
	}
};

console.log(person.userAge = 18);
console.log(person.userAge);