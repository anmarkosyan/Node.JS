'use strict'
// console.log(this);
// console.log(globalThis);


const chalk = require('chalk');
const text = require('./data')


console.log(chalk.blue('Hello NodeJS!'));
console.log(chalk.red(text));
console.log(__dirname);
console.log(__filename);
