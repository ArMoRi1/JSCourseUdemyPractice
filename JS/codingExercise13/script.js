const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let fullArea = 0;
    for(let i=0;i<data.shops.length;i++){
        let {width, length} = data.shops[i];
        fullArea+=width*length;
    }
    let fullVolume = fullArea * data.height;

    const moneyNeeded = data.budget - fullVolume*data.moneyPer1m3;
    if(moneyNeeded >=0){
        return 'Бюджета достаточно';
    }else{
        return 'Бюджета недостаточно';
    }
}

isBudgetEnough(shoppingMallData);