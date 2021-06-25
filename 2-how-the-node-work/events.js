const EventEmitter = require('events');
const http = require('http');
//1️⃣static import
// const exp = require('./eventLoop');
// console.log(exp.concat(1, 3));

//2️⃣ dynamic import
const loadMyModule = async function () {
  const { concat } = await import('./eventLoop.js');
  console.log(concat(2, 3));
};

loadMyModule();

//1️⃣ how to use event-driven architecture, EventEmitter global class,
// for creating our own instances, and use them
// class Sale extends EventEmitter{
//   constructor() {
//     super();
//   }
// }
//
// const myEmitter = new Sale();
////listening event
// myEmitter.on('newSale', () => {
//   console.log('I am listener');
// });
//
// myEmitter.on('newSale', () => {
//   console.log('listener: Anush');
// });
//
// myEmitter.on('newSale', birthYear => {
//   console.log(`Customers starting at age ${birthYear}`);
// });
////emit/call  event
// myEmitter.emit('newSale', 1986);

//2️⃣ how does work HTTP core API behind a sens, actually all core modules

// const server = http.createServer();
//
// server.on('request', (req, res) => {
//   console.log('request received');
//   res.end('request received');
// });
//
// server.on('request', (req, res) => {
//   console.log('Another request received');
// });
//
// server.on('close', () => {
//   console.log('server is closed');
// });
//
// server.listen(8000, '127.0.0.1', () => {
//   console.log('Listening to requests on port 8000...');
// });
