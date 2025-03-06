"use strict";

// for (let i = 0; i < 5; i++) {
//     // process.stdout.write(i.toString() + ' | '); // конвертуємо число в рядок
//     let row = '';
// 	for (let j = 0; j < 5; j++) {
//         // process.stdout.write("*"*j + ' '); // конвертуємо число в рядок
// 		if(j <= i){
// 			row +='*';
// 		}
// 	}
	
//     process.stdout.write(row + '\n'); // додаємо пробіл замість нового рядка
// }

let result = '';
const length = 6;

for (let i = 0; i < length; i++) {
    // process.stdout.write(i.toString() + ' | '); // конвертуємо число в рядок
    
	for (let j = 0; j < length; j++) {
        // process.stdout.write("*"*j + ' '); // конвертуємо число в рядок
		if(j <= i){
			result +='*';
		}
		else{
			result+=' ';
		}
	}
	result += '\n';
}

console.log(result);
