'use strict';

const test = time =>{
    return new Promise(resolve =>{
       setTimeout(() =>resolve(), time);
    });
};
// test(1000).then(()=>console.log('1000ms'));
// test(2000).then(()=>console.log('2000ms'));

//
// Promise.all([test(1000), test(2000)]).then(()=>{
//     console.log('all');
// });


Promise.race([test(1000), test(2000)]).then(()=>{
    console.log('race');
});
// console.log('data request...');
//
// const req = new Promise(function(resolve, reject){
//
//
//     setTimeout(()=>{
//        console.log('data preparing...')
//
//         const product = {
//             name : 'TV',
//             price: 2000,
//         }
//         resolve(product);
//     },2000);
//
// });
//
// req.then((product)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             product.status = 'order';
//             resolve(product);
//             // reject();
//         }, 2000);
//     });
// }).then(data =>{
//     data.modified = true;
//     return data;
//
// }).then(data =>{
//     console.log(data);
// }).catch(()=>{
//     console.error('smth went wrong!');
// }).finally(()=>{
//     console.log('finally..)')
// });










// console.log('data request...');
//
// const req = new Promise(function (resolve, reject){
//     setTimeout(()=>{
//         console.log('data preparing...');
//
//         const product = {
//             name: 'TV',
//             price: 2000,
//         };
//         resolve(product);
//
//     },2000);
// });
//
// req.then((product)=>{
//
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             product.status = 'order';
//             resolve(product);
//             // reject(product);
//
//         },2000);
//     }).then(data =>{
//         data.modify = true;
//         return data;
//     }).then(data =>{
//         console.log(data);
//     }).catch(()=>{
//         console.error('something went wrong!');
//     }).finally(()=>{
//         console.log('finally');
//     });
// });
//
//
//
