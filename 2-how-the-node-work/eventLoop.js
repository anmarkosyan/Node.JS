const fs = require('fs');
const crypto = require('crypto');

const start = new Date();

process.env.UV_THREADPOOL_SIZE = '4';

setTimeout(() => console.log('Timer 1 finish'), 0);
setImmediate(() => console.log('Immediate finish'));

process.nextTick(() => console.log('Outside next tick '));

fs.readFile('test-file.txt', () => {
  console.log('I/O finished');

  setTimeout(() => console.log('Timer 1 inside file system'), 0);
  setTimeout(() => console.log('Timer 2 inside file system'), 1000);
  setImmediate(() => console.log('Immediate  inside file system'));

  process.nextTick(() => console.log('insideNext tick first'));

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(new Date() - start,'password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(new Date() - start,'password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(new Date() - start,'password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(new Date() - start,'password encrypted');
  });
});

console.log('I am a first))))))))');
