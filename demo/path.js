const path = require('path');

//using path.basename() method
console.log('File name: ', path.basename(__filename));
//using path.dirname() method
console.log('Dir name: ', path.dirname(__filename));
//using extname() method
console.log('Extension name: ', path.extname(__filename));
//using parse() method
console.log('Parse: ', path.parse(__filename).name);
//using join() method
console.log(path.join(__dirname, 'server', 'index.html'))


