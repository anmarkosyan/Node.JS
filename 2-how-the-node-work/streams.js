const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  //❗️solution 1 not a good practice
  // fs.readFile('test-file.txt', (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  //✅ solution 2 using streams
  // const readable = fs.createReadStream('testtt-file.txt');
  // readable.on('data', chunk => {
  //   res.write(chunk);
  // });
  //
  // readable.on('end', () => {
  //   res.end();
  // });
  //
  // readable.on('error', err =>{
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end('File not found!');
  // })

  //solution 3 => the better solution, solving the problem with 'backpressure'
  //using pipe() method which will auto handle the speed of coming in data and going out data
  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
  console.log('listening server...');
});
