const arr = ['a', 'b', 'c'];

arr[10] = '3456';
// console.log(arr);
for(i=0; i < arr.length; i++){
	if(arr[i]===undefined){
		console.log('i am empty' + ' ' + i);
	}
	else{
		console.log(arr[i]);
	}
}

const arrObj = {
	a: 'a',
	'1':'b',
	2:'c',
	abc:{
		def:{

		}
	}
};
const b = 'b';
arrObj[b] = '1234';

