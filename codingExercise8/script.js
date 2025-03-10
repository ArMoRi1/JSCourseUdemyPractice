// Место для первой задачи
function getTimeFromMinutes(minutes) {
    
    
    if(isNaN(minutes) || !Number.isInteger(minutes) || (minutes < 0)){
        return "Ошибка, проверьте данные";
    } else{
        const h = Math.floor(minutes/60);
        const m = minutes - h*60;
        let forH = '';
        if(h === 1){
            forH = 'час'; 
        } else if(h === 2 || h === 3 || h === 4){
            forH = 'часа'; 
        } else{
            forH = 'часов';
        }

        let forM = '';
        if(m === 11){
            forM = 'минут';
        } else if(m%10==1){
            forM = 'минута';
        } else if(m===2 || m===3 || m===4 || m===5){
            forM = 'минуты';
        } else{
            forM = 'минут';
        }

        return `Это ${h} ${forH} и ${m} ${forM}`;
    }
}

console.log(getTimeFromMinutes(150));


// Место для второй задачи
function findMaxNumber(a,b,c,d) {
    if(arguments.length < 4 || isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || typeof a === 'string' || typeof b === 'string' || typeof c === 'string' || typeof d === 'string'){
        return 0;
    } else{
        let maxNumber = a;
        if(b > maxNumber){
            maxNumber = b;
        }
        if(c > maxNumber){
            maxNumber = c;
        }
        if(d > maxNumber){
            maxNumber = d;
        }
        return maxNumber;
    }
}
typeof value === 'string'
console.log(findMaxNumber(1, 5, 6.6, 11));