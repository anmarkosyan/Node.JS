// console.log(globalThis);
// console.log(arguments);//
// console.log(require('module').wrap());//(function (exports, require, module, __filename, __dirname) { undefined});

//1️⃣ using module.exports
const Calc = require('./test-module-1');

const calc1 = new Calc();
console.log(calc1.add(2, 3)); //5

//2️⃣ using exports/module.exports.add
const { add, multiply, divide } = require('./test-module-2');
//const {add1, multiply1, divide1} = require('./test-module-2');
console.log(add(3, 4));
//console.log(add1(3, 4));//TypeError: add1 is not a function
console.log(multiply(2, 2));
console.log(divide(6, 3));

//3️⃣ caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
