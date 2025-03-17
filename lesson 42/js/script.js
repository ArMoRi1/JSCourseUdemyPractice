'use strict';

const 	box = document.getElementById('box'),
		btns = document.getElementsByTagName('button'),
		circles = document.getElementsByClassName('circle'),
		wrapper = document.querySelector('.wrapper'),
		hearts = wrapper.querySelectorAll('.heart'),
		oneHeart = wrapper.querySelector('.heart');

console.dir(box);

box.style.backgroundColor = 'black';
box.style.width = '500px';
// box.style.cssText = 'background-color:red; width:30px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

for(let i=0; i<hearts.length; i++){
	hearts[i].style.backgroundColor = 'yellow';
}

hearts.forEach(item =>{
	item.style.backgroundColor = 'green';
});


const div = document.createElement('div');
const text = document.createTextNode('ja tyt byv');

div.classList.add('black');


// document.querySelector('.wrapper').append(div);

// document.body.prepend(div);

hearts[0].after(div);

// circles[0].remove();

hearts[0].replaceWith(circles[0]);

div.innerHTML = "<h1>Hello, Ira!</h1>";

// div.textContent = 'ja jogo rot ebal';
// div.textContent = "<h1>Hello, Ira!</h1>";

div.insertAdjacentHTML("beforeBegin", '<h2>hello, Ira</h2>');
