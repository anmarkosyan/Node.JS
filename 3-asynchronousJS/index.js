const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, 'utf8', (err, data) => {
  //console.log(`Breed: ${data} 🐶`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        console.log('Random dog image saved to file.');
      });
    })
    .catch((err) => console.log(err.message));
});
