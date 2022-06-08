import ui, { a, b, c } from './module1.mjs';

// import ui, { a, b, c } from './module1.mjs';//import{a,b,c}===export{a,b,c} if not error

console.log(ui); //salman  //node .\module2.mjs
console.log(a, b, c);
