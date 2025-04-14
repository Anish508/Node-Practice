const EvenEmitter = require('events')

class MyCustomEmitter extends EvenEmitter{
  constructor(){
    super();
    this.greeting = 'Hello'
  }
  greet(name){
    this.emit('greeting', `${this.greeting}, ${name}`)
  }
}

const myCustomEmitter = new MyCustomEmitter();

myCustomEmitter.on('greeting', (input)=>{
  console.log(`Greeting event`, input);
  
})

myCustomEmitter.greet("Anish")