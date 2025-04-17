'use strict';

try{
    document.querySelector('.active').addEventListener('click', () =>{
        console.log('click');
    });
} catch (e){
    console.log(e);
}

console.log('test!!!');
// try{
//     console.log('it\'s okay bradda!');
//     console.log(aa);
//     console.log('test');
// } catch(error){
// console.log('1 ' + error.name);
// console.log('2 ' + error.message);
// console.log('3 ' + error.stack);
// }finally {
//     console.log('--------------------\n' +
//         'finally result');
// }
// console.log('it\'s STILL okay bradda!');