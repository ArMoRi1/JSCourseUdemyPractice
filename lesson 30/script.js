"use strict"
function first(){
	console.log('1');
}

function second(){
	console.log('2');
}

first();
second();

function learnJS(lang,callback){
	console.log(`i learn: ${lang}`);
	callback();
}

function done(){
	console.log("i\'ve done this lesson!");
}

learnJS('JavaScript', done);