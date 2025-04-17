import {getData} from '../services/services';

function cards(){
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

    getData('http://localhost:3000/menu')
        .then(data=>{
            data.forEach(({menuImg, menuAlt, menuName, menuText, menuPrice,})=>{
                new Menu(menuImg, menuAlt, menuName, menuText, menuPrice, '.menu .container',).render();
            });
        });
}

export default cards;