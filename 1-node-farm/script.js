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
// console.table([{name: 'Anus', age: 34}, {name: 'Aram', age: 35 }])

const fs = require("fs");

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if(err) return console.log('ERROR 💥')
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    //console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      //console.log(data3);

      fs.writeFile("./txt/aboutAvocado.txt", `${data2}\n${data3}`, 'utf-8',err => {
        console.log('Your file has been written🎉')
      });
    });
  });
});
