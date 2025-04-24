"use strict"

const category = 'toys';

const a = console.log('https://someurl.com/' + category + "/4");
const b = console.log(`https://someurl.com/${category}/4`);

if(a===b){
	console.log(true);
}
else{
	console.log(false);
}
