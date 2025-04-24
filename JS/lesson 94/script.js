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
      change = document.querySelector('#color'),
      confirmButton = document.querySelector('.confirmButton'),
      body = document.querySelector('body');

if(localStorage.getItem('isChecked')){
    checkBox.checked = true;
    body.style.backgroundColor = 'pink';
}

checkBox.addEventListener('change', ()=>{
    localStorage.setItem('isChecked', true);
    localStorage.setItem('bodyPink', 'pink')

    if(checkBox.checked){
        localStorage.removeItem('bodyPink');
        body.style.backgroundColor = 'pink';
    }else{
        localStorage.setItem('bodyPink', 'pink');
        body.style.backgroundColor = '#fff';
    }
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

if(localStorage.getItem('changeButtonBG') === 'changed'){
    change.style.backgroundColor = 'green';
}

confirmButton.addEventListener('click', (e)=>{
    e.preventDefault();
   if(localStorage.getItem('changeButtonBG') === 'changed'){
       localStorage.removeItem('changeButtonBG');
       change.style.backgroundColor = 'blue';
   }
    else{
      localStorage.setItem('changeButtonBG', 'changed');
      change.style.backgroundColor = 'green';
   }
});































// const person = {
//     name: 'Ira',
//     age: 17,
// };
//
// const serializedPerson = JSON.stringify(person);
// localStorage.setItem('Ira', serializedPerson);
//
// console.log(JSON.parse(localStorage.getItem('Ira')));