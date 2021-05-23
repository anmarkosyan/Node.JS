// console.log(global)
// console.log('hi log!!');//global console module
//console.warn('hi warn!!');
// console.error('hi error!');
// console.error(new Error('hi'));
// console.trace('hi trace');
//
// console.time('loop time');
// for (let i = 0; i <10 ; i++) {
//
// }
// console.timeEnd('loop time');
// console.table([{name: 'Anush', age: 34}, {name: 'Aram', age: 35 }])

const fs = require("fs");

const readText = fs.readFileSync("./txt/input.txt", "utf-8");

const writeText = ` This is what we know about avocado: ${readText}\n Created at: ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", writeText);
