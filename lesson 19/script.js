"use strict"

if(true){
	console.log(1);
}
else{
	console.log(0);
}

// if(num < 49){
// 	console.log('Error');
// }
// else if(num === 50){
// 	console.log("Norm");
// }
// else{
// 	console.log("Too much!");
// }

// (num === 50) ? console.log("ok!") : console.log("error!");

const num = 50;
switch(num){
	case 49:
		console.log('Error');
		break;
	case 50:
		console.log('Norm');
		break;
	case 51:
		console.log('Too much!');
		break;
	default:
		console.log("ja joho rot navpaku:(");
}