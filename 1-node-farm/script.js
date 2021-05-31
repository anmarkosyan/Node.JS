//Modules
const fs = require('fs');
const http = require('http');

const slugify = require('slugify');

//const url = require('url');//❗️deprecated

const replaceTemplate = require('./modules/replaceTemplates');

//File system
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

//Functions and variables
const dataArr = JSON.parse(data);
const slugsArr = dataArr.map(item => slugify(item.productName, { lower: true }));
console.log(slugsArr)
//SERVER
const server = http.createServer((req, res) => {
  const baseURL = `https://${req.headers.host}/`;
  const reqUrl = new URL(req.url, baseURL);
  const { searchParams, pathname } = reqUrl;

  //overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    const cardHtml = dataArr.map(item => replaceTemplate(tempCard, item)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardHtml);
    res.end(output);

    //product page
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    const product = dataArr[searchParams.get('id')];
    const output = replaceTemplate(tempProduct, product);

    res.end(output);

    //api
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);

    //not found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });
    res.end('<h1>This page could not be found!!!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000...');
});
