'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send();
    //
    // request.addEventListener('load', ()=>{
    //     if(request.status === 200){
    //         // console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = +inputRub.value / data.current.usd;
    //         // console.log(request.readyState);
    //     } else{
    //         alert('Smth went wrong!')
    //     }
    // });

    request.addEventListener('load', () => {
        if (request.status === 200) {
            try {
                const data = JSON.parse(request.response);
                inputUsd.value = +inputRub.value / data.current.usd;
            } catch (e) {
                console.error('Помилка розбору JSON:', e);
                alert('Помилка розбору JSON відповіді');
            }
        } else {
            alert('Помилка отримання даних: ' + request.status);
        }
    });

    // status
    // statusText
    // response
    // readyState



});