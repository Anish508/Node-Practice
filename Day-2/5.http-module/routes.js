const http = require(('http'));

const server = http.createServer((req,res)=> {
  if (req.url === "/"){
    res.writeHead(200,{ "Content-type":"text/plain"})
    res.end("This is home page")
  }
  else if (req.url === "/projects"){
    res.writeHead(200,{ "Content-type":"text/plain"})
    res.end("This is Project page")
  }
  else{
    res.writeHead(404,{ "Content-type":"text/plain"})
    res.end("page is not found")
  }
   
  

})

const PORT = 3000;
server.listen(PORT, ()=>{
  console.log("Server started at port:",PORT);
  
})