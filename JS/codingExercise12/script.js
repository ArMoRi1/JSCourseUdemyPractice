const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) !== 'string'){
        return "Ошибка!";
    }else{
        let reverseStr = '';
        for(let i=str.length-1; i<=str.length && i>=0; i--){
            reverseStr+=str[i];
        }
        return reverseStr;
    }
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    
    if(arr.length === 0)
    {
        return 'Нет доступных валют';
    }else{
        const availableCurr = arr.filter(curr => curr !== missingCurr);
        let message ='Доступные валюты:\n'
        for(let curr in availableCurr){
            message += availableCurr[curr] + '\n';
        }
         return message;
    }
   
}