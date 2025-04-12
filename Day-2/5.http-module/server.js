const http = require(('http'));

const server = http.createServer((req,res)=>{
  res.writeHead(200, {"Content-type":"text/plain"});
  res.end("Hello node js from backend")
  
})

const PORT = 3001;
server.listen(PORT, ()=>{
  console.log("Server started at port:",PORT);
  
})