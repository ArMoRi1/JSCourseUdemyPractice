'use strict';

setTimeout(()=> console.log('timeout'));

Promise.resolve()
.then(()=> console.log('promise__1'));

queueMicrotask(()=>console.log('wow'));

Promise.resolve()
    .then(()=> console.log('promise__2'));
console.log('code');

//()=>{}
//microtasks: then/catch/finally/await
//render

//()=>{}
//microtasks: then/catch/finally/await
//render

//()=>{}
//microtasks: then/catch/finally/await
//render