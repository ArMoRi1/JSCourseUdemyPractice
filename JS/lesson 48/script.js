
//touchstart
// window.addEventListener('DOMContentLoaded', ()=>{
// 	const box = document.querySelector('.box');

// 	box.addEventListener('touchstart', (e)=>{
// 		e.preventDefault();
// 		console.log('start');
// 	})
// });

// touchmove
window.addEventListener('DOMContentLoaded', ()=>{
	const box = document.querySelector('.box');

	box.addEventListener('touchmove', (e)=>{
		e.preventDefault();
		console.log(e.targetTouches[0].pageX);
	})
});

//touchend
// window.addEventListener('DOMContentLoaded', ()=>{
// 	const box = document.querySelector('.box');

// 	box.addEventListener('touchend', (e)=>{
// 		e.preventDefault();
// 		console.log('end');
// 	})
// });

//touchenter
//touchleave
//touchcancel

//touches
//targetTouches
//changedTouches
