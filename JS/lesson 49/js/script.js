"use strict";

const p = document.querySelectorAll('p');

console.log(p);

const script = document.createElement('script');

script.src = "js/test.js";

document.body.append(script);