//------------------------------

'use strict';

//i - all registers(either lower- of upper- case)
//g - global
//m - many strings

// const ans = prompt('what is ur name?');
// const reg = /\d/g;
//
// console.log(ans.match(reg));

const str = 'My name is R2D2!';

console.log(str.match(/\D/ig));

// \d - digital(numbers)
// \w - words(letters)
// \s - spaces

// \D - all NOT digital(numbers)
// \W - all NOT words(letters)
// \S - all NOT spaces


// console.log(ans.match(reg));


// const pass = prompt('Password?');
//
// console.log(pass.replace(/\./g, '*'));


// console.log('12-34-56'.replace(/-/g, ':'));