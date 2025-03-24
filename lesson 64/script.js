


const btn = document.querySelector('.btn');
let timerId,
	i=0;

function myAnimation(){
	const element = document.querySelector('.box');
	let pos = 0;

	const id = setInterval(frame, 10);
	function frame(){
		if(pos == 300){
			clearInterval(id);
		}else{
			pos++;
			element.style.top = pos+"px";
			element.style.left = pos+"px";

		}
	}
}

btn.addEventListener('click', myAnimation);

// function logger(){
// 	if(i==3){
// 		clearInterval(timerId);
// 	}
// 	console.log('hellow, Ira');
// 	i++;
// }


// let id = setTimeout(function log(){
// 	console.log('ding-ding-ding maddafakka');
// 	id = setTimeout(log, 500);
// }, 500);
