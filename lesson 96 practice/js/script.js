window.addEventListener('DOMContentLoaded', () =>{
	//tabs
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabs(){
		tabsContent.forEach(item =>{
			item.classList.add('hide','fade');
			item.classList.remove('show');
		});

		tabs.forEach(item =>{
			item.classList.remove("tabheader__item_active");
		});
	}
	function showTab(i=0){
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add("tabheader__item_active");
	}

	tabsParent.addEventListener('click', (event)=>{
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')){
			tabs.forEach((item, i)=>{
				if(target === item){
					hideTabs();
					showTab(i);
				}
			});
		}
	});
	hideTabs();
	showTab(0);


	//timer

	const deadLine = '2025-05-20';

	function getTimeRemaining(endTime){
		let days, hours, minutes, seconds;
		const t = Date.parse(endTime) - Date.parse(new Date());

		if(t <=0){
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		}else{
			days = Math.floor(t / (1000*60*60*24)),
				hours =Math.floor((t / (1000*60*60) % 24)),
				minutes =  Math.floor((t/1000/60) % 60),
				seconds = Math.floor((t/1000)%60);
		}
		return {
			'total' : t,
			'days'  : days,
			'hours' : hours,
			'minutes': minutes,
			'seconds': seconds,
		};
	}

	function getZero(num){
		if(num>=0 && num<10){
			return `0${num}`;
		}else{
			return num;
		}
	}


	function setClock(selector, endTime){
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds');
		timeInterval = setInterval(updateClock, 1000);

		updateClock();
		function updateClock(){
			const t = getTimeRemaining(endTime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);


			if(t.total<=0){
				clearInterval(timeInterval);
			}
		}
	}

	setClock('.timer', deadLine);

	//modal windows

	const modalTriggers = document.querySelectorAll('[data-modal]');
	const modal = document.querySelector('.modal');
	// const modalCloseBtn = document.querySelector('[data-close]');

	function openModal(){
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerID);
	}

	function modalClose(){
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}

	modalTriggers.forEach((trigger)=>{
		trigger.addEventListener('click', openModal);
	});

	// modalCloseBtn.addEventListener('click', modalClose);

	modal.addEventListener('click', (e)=>{
		if(e.target === modal || e.target.getAttribute('data-close')==''){
			modalClose();
		}
	});

	document.addEventListener('keydown', (e)=>{
		if(e.code === 'Escape' && modal.classList.contains('show')){
			modalClose();
		}
	});

	const modalTimerID = setTimeout( openModal, 50000);

	function showModalByScroll(){
		if(window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1){
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);


	//Cards
	class Menu {
		// static count = 0;

		constructor(menuImg, menuAlt, menuName, menuText, menuPrice, parentSelector, ...classes){
			this.menuImg = menuImg;
			this.menuAlt = menuAlt;
			this.menuName = menuName;
			this.menuText = menuText;
			this.menuPrice = menuPrice;
			this.parent = document.querySelector(parentSelector);
			this.classes = classes;
			this.tranfer = 42;
			this.changeToUAH();
			// Menu.count++;
		}

		changeToUAH(){
			this.menuPrice = this.menuPrice * this.tranfer;
		}

		render(){
			const element = document.createElement('div');
			if(this.classes.length === 0){
				this.element = 'menu__item';
				element.classList.add(this.element);
			}
			this.classes.forEach(className => element.classList.add(className));
			element.innerHTML = `
					
                    <img src="${this.menuImg}" alt="${this.menuAlt}">
                    <h3 class="menu__item-subtitle">Меню ${this.menuName}</h3>
                    <div class="menu__item-descr">${this.menuText}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.menuPrice}</span> грн/день</div>
                    </div>
				`;
			this.parent.append(element);
		}
	}

	const getData = async (url)=>{
		const res = await  fetch(url);

		if(!res.ok){
			throw new Error(`could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

	axios.get('http://localhost:3000/menu')
		.then(data => data.data.forEach(({menuImg, menuAlt, menuName, menuText, menuPrice,})=>{
			new Menu(menuImg, menuAlt, menuName, menuText, menuPrice, '.menu .container',).render();
		}));

	// getData('http://localhost:3000/menu')
	// 	.then(data=>{
	// 		data.forEach(({menuImg, menuAlt, menuName, menuText, menuPrice,})=>{
	// 			new Menu(menuImg, menuAlt, menuName, menuText, menuPrice, '.menu .container',).render();
	// 		});
	// 	});

	// getData('http://localhost:3000/menu')
	// 	.then(data=>createCard(data));
	// function createCard(data){
	// 	data.forEach(({menuImg, menuAlt, menuName, menuText, menuPrice,})=>{
	// 		const element = document.createElement('div');
	// 		element.classList.add('menu__item');
	//
	// 		element.innerHTML = `
	// 		 <img src="${menuImg}" alt="${menuAlt}">
	//                 <h3 class="menu__item-subtitle">Меню ${menuName}</h3>
	//                 <div class="menu__item-descr">${menuText}</div>
	//                 <div class="menu__item-divider"></div>
	//                 <div class="menu__item-price">
	//                     <div class="menu__item-cost">Цена:</div>
	//                     <div class="menu__item-total"><span>${menuPrice * 42}</span> грн/день</div>
	//                 </div>
	// 		`;
	// 		document.querySelector('.menu .container').append(element)
	// 	});
	// }
	//Forms
	const forms = document.querySelectorAll('form');
	const messages = {
		loading: 'img/spinner.svg',
		success: 'Дякую. Ваше повідомлення прийнято!',
		fail: 'Сук, шота нє то:(',
	}
	forms.forEach(item =>{
		bindPostData(item);
	});

	const postData = async (url, data)=>{
		const res = await  fetch(url, {
			method: "POST",
			headers: {
				'Content-type' : 'application/json',
			},
			// body : formData,
			body: data,
		});

		return await res.json();
	};
	function bindPostData(form){
		form.addEventListener('submit', (e)=>{
			e.preventDefault();

			let statusMessage = document.createElement('img');
			statusMessage.src = messages.loading;
			statusMessage.style.cssText = `
					display: block;
					margin: 0 auto;
				`;
			form.insertAdjacentElement('afterend', statusMessage);

			const formData = new FormData(form);

			// const object = {};
			// formData.forEach(function(value, key){
			// 	object[key] = value;
			// });

			const json = JSON.stringify(Object.fromEntries(formData.entries()));


			postData('http://localhost:3000/requests', json)
				.then(data => {
					// console.log(data)
					showThanksModal(messages.success);
					statusMessage.remove();
				}).catch(() => {
				showThanksModal(messages.fail);
			}).finally(()=>{
				form.reset();
			});
		});
	}

	function showThanksModal(message){
		const prevModalDialog = document.querySelector('.modal__dialog');
		prevModalDialog.classList.add('hide');
		openModal();

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');

		thanksModal.innerHTML = `
				<div class="modal__content">
					<div data-close class="modal__close">
						&times;
					</div>
					<div class="modal__title">
						${message}
					</div>
				</div>
			`;
		document.querySelector('.modal').append(thanksModal);

		setTimeout(()=>{
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			modalClose();
		}, 4000)
	}

	fetch('http://localhost:3000/menu')
		.then(data => data.json())
	// .then(res => console.log(res));


	//Slider

	let slides = document.querySelectorAll('.offer__slide'),
		slider = document.querySelector('.offer__slider'),
		prev = document.querySelector('.offer__slider-prev'),
		next = document.querySelector('.offer__slider-next'),
		total = document.querySelector('#total'),
		current = document.querySelector('#current'),
		slidesWrapper = document.querySelector('.offer__slider-wrapper'),
		slidesField = document.querySelector('.offer__slider-inner'),
		width = window.getComputedStyle(slidesWrapper).width;

	let slideIndex = 1;
	let offset = 0;

	if(slides.length < 10){
		total.textContent = `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	} else{
		total.textContent = slides.length;
		current.textContent = slideIndex;
	}

	slidesField.style.width = 100 * slides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';

	slidesWrapper.style.overflow = 'hidden';

	slides.forEach((slide)=>{
		slide.style.width = width + '%';
	});

	slider.style.position = 'relative';

	const indicators = document.createElement('ol'),
		dots = [];
	indicators.classList.add('carousel-indicators');
	indicators.classList.cssText = `
		    position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 15;
			display: flex;
			justify-content: center;
			margin-right: 15%;
			margin-left: 15%;
			list-style: none;
    	`;
	slider.append(indicators);
	for(let i=0; i<slides.length; i++){
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i+1);
		dot.style.cssText = `
				box-sizing: content-box;
				flex: 0 1 auto;
				width: 30px;
				height: 6px;
				margin-right: 3px;
				margin-left: 3px;
				cursor: pointer;
				background-color: #fff;
				background-clip: padding-box;
				border-top: 10px solid transparent;
				border-bottom: 10px solid transparent;
				opacity: .5;
				transition: opacity .6s ease;
			`;
		if(i==0){
			dot.style.opacity = '1';
		}
		indicators.append(dot);
		dots.push(dot);
	}


	function deleteNotDigits(str){
		return +str.replace(/\D/g, '');
	}

	next.addEventListener('click', ()=>{
		if(offset == deleteNotDigits(width) * (slides.length - 1)){
			offset = 0;
		}else{
			offset += deleteNotDigits(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if(slideIndex == slides.length){
			slideIndex = 1;
		}else{
			slideIndex++;
		}
		if(slides.length < 10){
			current.textContent = `0${slideIndex}`;
		} else{
			current.textContent = slideIndex;
		}

		dots.forEach( dot => dot.style.opacity = '.5');
		dots[slideIndex-1].style.opacity = 1;
	});

	prev.addEventListener('click', ()=>{
		if(offset == 0){
			offset = deleteNotDigits(width) * (slides.length - 1)
		}else{
			offset -= deleteNotDigits(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if(slideIndex == 1){
			slideIndex = slides.length;
		}else{
			slideIndex--;
		}
		if(slides.length < 10){
			current.textContent = `0${slideIndex}`;
		} else{
			current.textContent = slideIndex;
		}

		dots.forEach( dot => dot.style.opacity = '.5');
		dots[slideIndex-1].style.opacity = 1;
	});

	dots.forEach(dot =>{
		dot.addEventListener('click', (e)=>{
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = deleteNotDigits(width) * (slideTo - 1);

			slidesField.style.transform = `translateX(-${offset}px)`;

			if(slides.length < 10){
				current.textContent = `0${slideIndex}`;

			} else{
				current.textContent = slideIndex;
			}

			dots.forEach( dot => dot.style.opacity = '.5');
			dots[slideIndex-1].style.opacity = 1;
		});
	});
	// let slideIndex = 1;
	// showSlides(slideIndex);
	//
	// if(slides.length < 10){
	// 	total.textContent = `0${slides.length}`;
	// } else{
	// 	total.textContent = slides.length;
	// }
	//
	//
	// function showSlides(n){
	// 	if(n > slides.length){
	// 		slideIndex = 1;
	// 	}
	//
	// 	if(n < 1){
	// 		slideIndex = slides.length;
	// 	}
	//
	// 	slides.forEach(item => item.style.display = 'none');
	//
	// 	slides[slideIndex-1].style.display = 'block'
	//
	// 	if(slides.length < 10){
	// 		current.textContent = `0${slideIndex}`;
	// 	} else{
	// 		total.textContent = slideIndex;
	// 	}
	// }
	//
	// function plusSlides(n){
	// 	showSlides(slideIndex += n);
	// }
	//
	// prev.addEventListener('click', ()=>{
	// 	plusSlides(-1);
	// });
	//
	// next.addEventListener('click', ()=>{
	// 	plusSlides(1);
	// });


	// Calories calculator

	const result = document.querySelector(".calculating__result span");
	let sex = 'female', height, weight, age, ratio = 1.375;

	function Calculating(){
		if(!sex || !height || !weight || !age || !ratio){
			result.textContent = '/*----*/';
			return;
		}
		if(sex === 'female'){
			result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
		}else{
			result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
		}
	}

	Calculating();

	function getStaticInfo(parentSelector, activeClass){
		const elements = document.querySelectorAll(`${parentSelector} div`);

		elements.forEach(elem =>{
			elem.addEventListener('click', (e)=>{
				if(e.target.getAttribute('data-ratio')){
					ratio = +e.target.getAttribute('data-ratio');
				}else{
					sex = e.target.getAttribute('id');
				}

				// console.log(ratio, sex);

				elements.forEach(elem =>{
					elem.classList.remove(activeClass);
				});

				e.target.classList.add(activeClass);
				Calculating();
			});
		});
	}

	getStaticInfo('#gender', 'calculating__choose-item_active');
	getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');

	function getDynamicInfo(selector){
		const input = document.querySelector(selector);

		input.addEventListener('input', ()=>{
			switch(input.getAttribute('id')){
				case 'height':
					height = +input.value;
					break;
				case 'weight':
					weight = +input.value;
					break;
				case 'age':
					age = +input.value;
					break;
			}
			Calculating();
		});
	}

	getDynamicInfo('#height');
	getDynamicInfo('#weight');
	getDynamicInfo('#age');


});





