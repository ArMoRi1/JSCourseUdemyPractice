'use strict';

// localStorage.setItem('number', 5);
//
// localStorage.getItem('number');
//
// localStorage.removeItem('number');
//
// localStorage.clear();
//
// console.log();

const checkBox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if(localStorage.getItem('isChecked')){
    checkBox.checked = true;
}

checkBox.addEventListener('change', ()=>{
    localStorage.setItem('isChecked', true);
});

if(localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = 'red';
}

change.addEventListener('click', ()=>{
    if(localStorage.getItem('bg') === 'changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';

    }else{
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const person = {
    name: 'Ira',
    age: 17,
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem('Ira', serializedPerson);

console.log(JSON.parse(localStorage.getItem('Ira')));