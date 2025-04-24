const btns = document.querySelectorAll('button'),
	wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red', 'iryna'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if(btns[1].classList.contains('red')){
// 	console.log('there is a red class!');
// }

btns[0].addEventListener('click', ()=>{
	// if(!btns[1].classList.contains('red')){
	// 	btns[1].classList.add('red');
	// }else{
	// 	btns[1].classList.remove('red');
	// }
	btns[1].classList.toggle('red');
})

wrapper.addEventListener('click', (event)=>{
	if(event.target && event.target.matches("button.red")){
		console.log('hello');
	}
});

// btns.forEach(btn =>{
// 	btn.addEventListener('click', ()=>{
// 		console.log('hello');
// 	})
// })


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);