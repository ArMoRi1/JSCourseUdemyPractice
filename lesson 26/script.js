"use strict"

const usdCurr = 41.12;
const eurCurr = 43.01;
const discount = 0.1;

function convert(amount, curr){
	return(curr * amount);
}

function promotion(result){
	console.log(result * discount);
}

const res = convert(500, usdCurr)

promotion(res);
// either
promotion(convert(500, usdCurr));


function test(){
	for(let i =0; i<5; i++){
		console.log(i);
		if(i===3) return;
	}
	console.log('done');
}

test();