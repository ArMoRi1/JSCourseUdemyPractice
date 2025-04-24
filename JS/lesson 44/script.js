const	btn = document.querySelector('button'),
		btns = document.querySelectorAll('button'),
		overlay = document.querySelector('.overlay');

// btn.addEventListener('click', () =>{
// 	alert('Click');
// });

// btn.addEventListener('click', () =>{
// 	alert('Click2');
// });

btn.addEventListener('mouseenter', (e)=>{
	e.target.style.backgroundColor = 'red';
	e.target.addEventListener('mouseleave', (e)=>{
		e.target.style.backgroundColor = 'green';
	})
});

const deleteElement = (e)=>{
	console.log(e.currentTarget);
	console.log(e.type);
	// i++;
	// if(i==1){
	// 	btn.removeEventListener('click', deleteElement);
	// }
}


overlay.addEventListener('click', deleteElement);
btn.addEventListener('click', deleteElement);

btns.forEach(btn => {
	btn.addEventListener('click', deleteElement);
});



const link = document.querySelector('a');

link.addEventListener('click', (e)=>{
	e.preventDefault();

	console.log(e.target);
});

