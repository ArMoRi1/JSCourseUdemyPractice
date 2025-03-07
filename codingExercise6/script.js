// Место для первой задачи
function sayHello(name) {
    return(`Привет, ${name}`);
}

// Место для второй задачи
function returnNeighboringNumbers(number) {

    return [number-1, number, number+1]
}

// Место для третьей задачи
function getMathResult(startNumber, progressionSteps) {
    let row = '';
    if(typeof(progressionSteps) !== 'number' || progressionSteps <=0){
        return startNumber;      
    } 
    for(let i=0;i<progressionSteps;i++){
        row += startNumber * (i+1);
        if(i<progressionSteps-1){
            row+= '---';
        }
    }
    return row;
}
console.log(getMathResult(12, 3));