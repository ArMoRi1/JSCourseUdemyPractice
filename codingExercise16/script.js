function factorial(n) {
	
    if(!Number.isInteger(n)){
        return 'suka blyat\`';
    }else if(n<=0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
    
}
// console.log(factorial(6));

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




// function recursion(n){
// 	if(n < 1 || !Number.isInteger(n)){
//         return 'suka blyat\`';
// 	}else if(n==1){
// 	    return 1;
// 	}else{
// 		// return recursion(n-1) + ' ' + n;	//1 2 3 4 5 	
// 		return n + ' ' +  recursion(n-1) ;	//5 4 3 2 1
// 	}
// }
// console.log(recursion(5));

// function recursion(a,b){
// if(a<b+1){
// 	return recursion(a,b-1) +' '+ b;
// } else if(a+1>b){
// 	return a +' '+ recursion(a-1,b);
// }else{
// 	return '';
// }
// }
// console.log(recursion(1,5));


// function recursion(a,b){
// if(a<b){
// 	return recursion(a,b-1) +' '+ b;
// } else if(a>b){
// 	return a +' '+ recursion(a-1,b);
// }else {
//     return a.toString();
// }
// }
// console.log(recursion(5,1));


// function recursion(n){
// 	if(n==2){
// 		return "Yes";
// 	}
// 	if(n%2===1){
// 		return "No";
// 	} else{
// 		return recursion(n/2);
// 	}
// }
// console.log(recursion(128));


function recursion(n){
	n = Math.floor(Math.abs(n));
	let result = 0;
	if(n<10 && n>=0){
		return result+=n;
	}else{
		result = result + n%10;
		return  result+ recursion(Math.floor(n/10));
	}

}
console.log(recursion(-5671.1));