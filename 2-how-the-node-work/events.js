const EventEmitter = require('events');

class Sale extends EventEmitter{
  constructor() {
    super();
  }
}

const myEmitter = new Sale();

myEmitter.on('newSale', () => {
  console.log('I am listener');
});

myEmitter.on('newSale', () => {
  console.log('listener: Anush');
});

myEmitter.on('newSale', birthYear => {
  console.log(`Customers starting at age ${birthYear}`);
});

myEmitter.emit('newSale', 1986);

//how does work HTTP core API behind a sens
