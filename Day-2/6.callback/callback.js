function person(name, callback){
  console.log("Name is :",name);
  callback()
}

function address(){
  console.log("Address is India ");
  
}

person("Anish", address)

//callback hell

const fs = require('fs');

const fileInput = fs.readFile('input.txt', 'utf-8', (err, data)=>{
  if(err){
    console.error("Error reading file:", err);
    
  }

  let modifiedFile = data.toUpperCase()

  fs.writeFile('output.txt', modifiedFile, (err)=>{
    console.error("File writeing error",err);
   
    
  })
  console.log("Writing successful");
  
})


