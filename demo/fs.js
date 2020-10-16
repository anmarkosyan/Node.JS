//File system module : fs

const fs = require('fs');


const path = require('path');
//we can create new  folder, Ace
// fs.mkdir(path.join(__dirname, 'test'), err => {
//     if(err) {
//         throw err;
//     }
//     console.log('file created')
// })

//we can create new file
const filePath = path.join(__dirname, 'test', 'test.txt');

fs.writeFile(filePath, 'hello nodejs!', err => {
    if(err){
        throw err;
    }
    console.log('file created')
})
//add new content  in the same file
fs.appendFile(filePath, '\nhello again', err => {
    if(err){
        throw err;
    }
    console.log('file created')
})
//how to read file
fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err) {
        throw err;
    }
    console.log(content);//with using 'utf -8'

    //or create new const and convert to string
    //const data = Buffer.from(content)
    //console.log('Content: ', data.toString())
})
