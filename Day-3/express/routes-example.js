const express = require('express')
const app = express()

//root route
app.get('/', (req, res)=>{
  res.send("Welcome to our home page")
})

app.get("/products", (req,res)=>{
  const product = [
    {
      id:1,
      label:'Product1'
    },
    {
      id:2,
      label:'Product2'
    },
    {
      id:3,
      label:'Product3'
    },
  ]
  res.json(product)
})


app.get('/Products/:id',(req, res)=>{
  const getsingleproduct = parseInt(req.params.id)
  const product = [
    {
      id:1,
      label:'Product1'
    },
    {
      id:2,
      label:'Product2'
    },
    {
      id:3,
      label:'Product3'
    },
  ]

  const getProduct = product.find(pro=>pro.id === getsingleproduct)
  if(getProduct){
    res.json(getProduct)
  }else{
    res.status(404).send("Product not found")
  }
})
const PORT = 3001;
app.listen(PORT, ()=>{
  console.log("Server listening in port",PORT);
  
})