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
const http = require("http");
const url = require("url");

//FILE SYSTEM
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if(err) return console.log('ERROR 💥')
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     //console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       //console.log(data3);
//
//       fs.writeFile("./txt/aboutAvocado.txt", `${data2}\n${data3}`, 'utf-8',err => {
//         console.log('Your file has been written🎉')
//       });
//     });
//   });
// });

//SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the Product");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>This page could not be found!!!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000...");
});
