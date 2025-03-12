"use strict"

// let a = 5,
// 	b = a;
// b = b + 5;


// const obj = {
// 	a:5,
// 	b:1,
// };

// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj){
	let objCopy = {};

	let key;
	for(key in mainObj){
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}

const numbers = {
	a:2,
	b:5,
	c:{
		x:7,
		y:4,
	},
};

const newNumners = copy(numbers);
newNumners.a = 10;
newNumners.c.x = 10;

// console.log(numbers);
// console.log(newNumners);

const add = {
	d: 17,
	e: 20,
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asafdsbgfh';
// console.log(newArray);
// console.log(oldArray);

const video = ['youtube', 'twich', 'insta'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

function log(a,b,c){
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];
log(...num);


const array = ["a", "b"];
const newArr = [...array];

const q ={
	one:1,
	two:2,
};

const newObj = {...q};
console.log(newObj);