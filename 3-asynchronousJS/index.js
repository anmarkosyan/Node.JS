const fs = require('fs');
const superagent = require('superagent');

const readFilePromise = function (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) reject('I could not find the file!!');
      resolve(data);
    });
  });
};

const writFilePromise = function (file, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('Could not create an image file!');
      resolve('Random dog image saved to file.');
    });
  });
};

readFilePromise(`${__dirname}/dog.txt`)
  .then(data => {
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then(res => {
    return writFilePromise('dog-img.txt', res.body.message);
  })
  .then(res => console.log(res))
  .catch(err => console.log(err.message));

// fs.readFile(`${__dirname}/dog.txt`, 'utf8', (err, data) => {
//   //console.log(`Breed: ${data} 🐶`);
//
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       fs.writeFile('dog-img.txt', res.body.message, (err) => {
//         console.log('Random dog image saved to file.');
//       });
//     })
//     .catch((err) => console.log(err.message));
// });
