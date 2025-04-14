const EvenEmitter = require('events')
const myFirstEmitter = new EvenEmitter();
myFirstEmitter.on('greet',(name)=>{
  console.log("Hello..", name);
  
})

myFirstEmitter.emit('greet', "Anish")