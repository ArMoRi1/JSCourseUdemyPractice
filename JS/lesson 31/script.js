"use strict"

const options = {
	name: 'test',
	width: '1024px',
	height: '1024px',
	colors: {
		border: 'black',
		bg: 'red',
	},
	makeTest: function(){
		console.log("test");
	}
};
// delete options.colors.bg;

const {border, bg} = options.colors;

console.log(border);
options.makeTest();
console.log(Object.keys(options).length);

let counter = 0;
for (let key in options){
	if(typeof(options[key])=== 'object'){
		for(let i in options[key]){
		console.log(`Характеристика ${i}  має значення ${options[key][i]}`);
		counter++;	
	}
	}else{
		console.log(`Характеристика ${key}  має значення ${options[key]}`);
		counter++;
	}
}
console.log('counter = ' + counter);