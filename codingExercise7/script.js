function calculateVolumeAndArea(a) {
    if(!Number.isInteger(a) || a <= 0){
        return "При вычислении произошла ошибка";
    }else{
         return `Объем куба: ${a*a*a}, площадь всей поверхности: ${a*a*6}`;
    }
   
}

function getCoupeNumber(seatNumber) {
    if (isNaN(seatNumber) || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        return Math.ceil(seatNumber / 4); 
    }
}


