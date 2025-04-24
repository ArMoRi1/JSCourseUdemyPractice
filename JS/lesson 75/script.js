'use strict';

// function showThis(a,b){
// 	console.log(this);
// 	function sum(){
// 		console.log(this)
// 		return a + b;
// 	}

// 	console.log(sum());
// }
// showThis(4,5);

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function(){
// 		function shout(){
// 			console.log(this);
// 		}
// 		shout();
// 	}
// };

// obj.sum();


// function User(name, age){
// 	this.name = name;
// 	this.age = age;
// 	this.human = true;
// 	this.hello = function(){
// 		console.log('hello, ' + this.name);
// 	};
// }

// function sayName(surname){
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// const user = {
// 	name: 'Ira',
// };

// sayName.call(user, 'Heyna');
// sayName.apply(user, ['Heyna']);

// function count(num){
// 	return this * num;
// }

// const double = count.bind(2);
// const triple = count.bind(3);
// console.log(double(3));
// console.log(triple(3));

//1) просто функція : this = window; але якшо 'use strict' - undefined
//2) контекст у методів об'єкта і є сам об'єкт
//3) this в конструкторах и класах - це новий екземпляр об'єкта 
//4) Вручну прив'язати this: call, apply, bind


const btn = document.querySelector('button');

btn.addEventListener('click', (e)=>{
	e.target.style.backgroundColor = 'green';
});

const obj = {
	num: 5,
	sayNumber: function(){
		const say = ()=>{
			console.log(this.num);
		};
		say();
	},
};

obj.sayNumber();

const double = a => a*2;

console.log(double(4));