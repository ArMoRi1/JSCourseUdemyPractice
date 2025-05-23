window.addEventListener('DOMContentLoaded', () =>{

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
	
});

