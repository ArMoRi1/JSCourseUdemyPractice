function calculator(){
    // Calories calculator

    const result = document.querySelector(".calculating__result span");
    let sex, height, weight, age, ratio;

    // Initialize values from localStorage or set defaults
    if(localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if(localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function Calculating(){
        if(!sex || !height || !weight || !age || !ratio){
            result.textContent = '/*----*/';
            return;
        }
        if(sex === 'female'){
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    function initiateLocalSettings(selector, activeClass){
        const elements = document.querySelectorAll(selector);

        elements.forEach(element => {
            element.classList.remove(activeClass);

            if(element.getAttribute('id') === localStorage.getItem('sex')){
                element.classList.add(activeClass);
            }

            if(element.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                element.classList.add(activeClass);
            }
        });
    }

    initiateLocalSettings('#gender div', 'calculating__choose-item_active');
    initiateLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function getStaticInfo(selector, activeClass){
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if(e.target.getAttribute('data-ratio')){
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', ratio);
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', sex);
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);
                Calculating();
            });
        });
    }

    getStaticInfo('#gender div', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInfo(selector){
        const input = document.querySelector(selector);

        // Set initial value from localStorage if it exists
        if (localStorage.getItem(input.id)) {
            input.value = localStorage.getItem(input.id);

            // Update the corresponding variable
            switch(input.id) {
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
        }

        // Add input event listener
        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = '';
            }

            const val = +input.value;

            switch(input.id) {
                case 'height':
                    height = val;
                    break;
                case 'weight':
                    weight = val;
                    break;
                case 'age':
                    age = val;
                    break;
            }

            // Save to localStorage
            localStorage.setItem(input.id, input.value);

            Calculating();
        });
    }

    getDynamicInfo('#height');
    getDynamicInfo('#weight');
    getDynamicInfo('#age');

    // Run initial calculation
    Calculating();
}

module.exports = calculator;