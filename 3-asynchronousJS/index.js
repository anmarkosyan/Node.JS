const fs = require('fs');
const superagent = require('superagent');

const readFilePromise = function (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) reject('I could not find that file!!');
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
//using async/await with try/catch
const getDogImg = async () => {
  try {
    const readFile = await readFilePromise(`${__dirname}/dog.txt`);

    const getImg1 =  superagent.get(
      `https://dog.ceo/api/breed/${readFile}/images/random`
    );
    const getImg2 =  superagent.get(
      `https://dog.ceo/api/breed/${readFile}/images/random`
    );
    const getImg3 =  superagent.get(
      `https://dog.ceo/api/breed/${readFile}/images/random`
    );

    const all = await Promise.all([getImg1, getImg2, getImg3]);
    const img = all.map(el => el.body.message)

   // console.log(img);
    const res = await writFilePromise('dog-img.txt', img.join('\n'));
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

getDogImg();

//using promises with then/catch
/*
readFilePromise(`${__dirname}/dog.txt`)
  .then(data => {
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then(res => {
    return writFilePromise('dog-img.txt', res.body.message);
  })
  .then(res => console.log(res))
  .catch(err => console.log(err.message));
 */
