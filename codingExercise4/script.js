// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    
    for(let i=0; i < arr.length; i++){
        result[i]=arr[i];
    }
    
    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for(let i = 0; i < data.length; i++){
        if(typeof(data[i])==="number"){
            data[i]*=2;
        }else{
            data[i]+=" - done";
        }
    }
    
    
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for(let i=data.length-1, j=0; i>=0, j<data.length; i--, j++){
        result[i] = data[j];
    }
    // Не трогаем
    return result;
}