function fib(n) {
    if (typeof(n) !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return "";
    }
    
    let result = '';
    let first = 0;
    let second = 1;
    
    for(let i=0; i<n;i++){
        if(i+1===n){
            result += `${first}`;
        } else{
            result += `${first} `;
        }
        
        let third = first + second;
        first = second;
        second = third;
    }
    return result;
}