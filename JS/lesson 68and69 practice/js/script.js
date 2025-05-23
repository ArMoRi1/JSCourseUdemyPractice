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

	const deadLine = '2023-04-04';

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
});

