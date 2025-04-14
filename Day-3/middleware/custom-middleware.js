const express = require("express");
const app = express();

const requestTimeStmps = (req, res, next) => {
  const timestamp = new Date().toISOString();

  console.log(`${timestamp} from ${req.method} to ${req.url}`);
  next();
};

app.use(requestTimeStmps)

app.get('/', (req, res)=>{
  res.send("Welcome to our home page")
})
app.get('/about', (req, res)=>{
  res.send("Welcome to our about page")
})

const PORT = 3002;
app.listen(PORT, ()=>{
  console.log("Server listening in port",PORT);
  
})

