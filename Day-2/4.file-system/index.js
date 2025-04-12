const path = require('path');
const fs = require('fs')

const dataFolder = path.join(__dirname, "data")

if(!fs.existsSync(dataFolder)){
  fs.mkdirSync(dataFolder)
  console.log("Data folder created");

}

const filePath = path.join(dataFolder , "example.txt")
//synchronous
fs.writeFileSync(filePath, "hello from node js")
console.log("File created succesfully");


const readFile = fs.readFileSync(filePath, 'utf-8');
console.log("File content:", readFile);


fs.appendFileSync(filePath, '\n this is new line')
console.log("Content appended:");
