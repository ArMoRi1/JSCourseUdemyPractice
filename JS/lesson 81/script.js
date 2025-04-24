'use strict';

const person = {
    name: 'Ira',
    tel:  '+0675180399',
    parents: {
        mom: 'Olha',
        dad: 'Volodymyr',
    },
};

const clone = JSON.parse(JSON.stringify(person));

clone.parents.dad = 'Artem';
console.log(clone.parents.dad);

