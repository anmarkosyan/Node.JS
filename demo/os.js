const os = require('os');

console.log('Operating system: ', os.platform());//darwin
console.log('CPU architecture: ', os.arch());//'x64'
console.log('Info about processor: ', os.cpus());
console.log('info about free memory: ', os.freemem());
console.log('All memory: ', os.totalmem());
console.log('Home dir: ', os.homedir());
console.log('Total ON: ', os.uptime());
