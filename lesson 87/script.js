'use strict';

//filter

const names = ['Artem', 'Ira', 'Bohdan', 'Oleksandr'];

// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });
//
// console.log(shortNames);


//map

// let answers = ['Artem', 'IRaN', 'BoHdaN'];
//
// answers = answers.map((item)=>{
//     return item.toLowerCase();
// });
//
// console.log(answers);

//  every/some

// const some = ['4', 'qwe', '[1,2,3]'];
//
// console.log(some.some(item => typeof(item)==='number'));
// console.log(some.every(item => typeof(item)==='string'));

//  reduce
//
// const arr = [1,2,3,4,5,6];
//
// const arrSum = arr.reduce((sum, current)=>{
//     return sum + current;
// },3);

// const arr = ['apple', 'banana', 'cigarettes'];
//
// const arrSum = arr.reduce((sum, current)=>{
//     return sum + " ," +current;
// });

// console.log(arrSum)


const object = {
    Artem : 'person',
    Ira : 'person',
    dog: 'animal',
    cat: 'animal',
};

const matrix = Object.entries(object)
    .filter( item => item[1] === 'person')
    .map( item => item[0]);

console.log(matrix);