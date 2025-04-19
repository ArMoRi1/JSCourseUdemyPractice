'use strict';

// function* generator(){
    // yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }
//
// const str = generator();
//
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());

// function* count(n){
//     for(let i=0; i < n; i++){
//         yield i;
//     }
// }
//
// const counter = count(7);
//
// for(let c of count(7)){
//     console.log(c);
// }

// function* fibonacci(limit) {
//     let a = 0, b = 1;
//     while (a < limit) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }
// for (let num of fibonacci(100)) {
//     console.log(num);
// }

function* gen() {
    yield 1;
    yield* ['A', 'B'];
    yield 2;
    yield 'z';
    yield 'z';
}

const nnn = gen();


for(let k of nnn){
    console.log(nnn.next().value);
}


