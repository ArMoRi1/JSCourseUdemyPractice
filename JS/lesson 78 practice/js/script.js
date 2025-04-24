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
					if(target == item){
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
	
		const modalTriggers = document.querySelectorAll('[data-modal');
		const modal = document.querySelector('.modal');
		const modalCloseBtn = document.querySelector('[data-close]');
	
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
	
		modalCloseBtn.addEventListener('click', modalClose);
	
		modal.addEventListener('click', (e)=>{
			if(e.target === modal){
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
			
			constructor(menuImg, menuAlt, menuName, menuText, menuPrice, parentSelector){
				this.menuImg = menuImg;
				this.menuAlt = menuAlt;
				this.menuName = menuName;
				this.menuText = menuText;
				this.menuPrice = menuPrice;
				this.parent = document.querySelector(parentSelector);
				this.tranfer = 42;
				this.changeToUAH();
				// Menu.count++;
			}
	
			changeToUAH(){
				this.menuPrice = this.menuPrice * this.tranfer;
			}

			render(){
				const element = document.createElement('div');
				element.innerHTML = `
					<div class="menu__item">
                    <img src="${this.menuImg}" alt="${this.menuAlt}">
                    <h3 class="menu__item-subtitle">Меню ${this.menuName}</h3>
                    <div class="menu__item-descr">${this.menuText}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.menuPrice}</span> грн/день</div>
                    </div>
                </div>
				`;
				this.parent.append(element);
			}
		}
	
		new Menu(
			'img/tabs/vegy.jpg',
			'vegy',
			'"Фитнес"', 
			'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
			6,
			'.menu__field .container'
		).render();
		new Menu(
			'img/tabs/elite.jpg', 
			'elite',
			'Премиум',
			'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
			12,
			'.menu__field .container'
		 ).render();
		new Menu(
			'img/tabs/post.jpg', 
			'post',
			'Фитнес', 
			'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков',
			8,
			'.menu__field .container'
		).render();
			
	});
	
	
	
	
	