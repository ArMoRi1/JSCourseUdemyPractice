function factorial(n) {
	
    if(!Number.isInteger(n)){
        return 'suka blyat\`';
    }else if(n<=0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
    
}
console.log(factorial(6));

// function factorial(n) {
//     if(!Number.isInteger(n)){
//         return 'suka blyat\`';
//     }else if(n<0 || n==1){
//         return 1;
//     }else{
//         let result = 1;
        
//         for(let i=n;i>1;i--){
// 			result*=i;
//         }
//         return result;
//     }
    
// }
// console.log(factorial(5));


