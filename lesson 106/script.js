'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'navigation',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]
try{
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if(!blockObj.id){
            throw new SyntaxError(`there is a problem in an oblect number: ${i}`);
        }
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
}catch(e){
   if(e.name === "SyntaxError"){
       console.log(e.message);
   } else throw e;


}
//
// const err = new Error('qewretrytuyiu');
// console.log(err.name +'\n' + err.message +'\n' + err.stack);



