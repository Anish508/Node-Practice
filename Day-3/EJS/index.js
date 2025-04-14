const express = require('express')
const path = require('path')
const { title } = require('process')

const app = express()

app.set("view engine", 'ejs')

//set the directory for the views

app.set('views', path.join(__dirname, 'views'))

const products =[
  {
    id:1,
    title:'produc1',
  },
  {
    id:2,
    title:'produc2',
  },
  {
    id:3,
    title:'produc3',
  }
]

app.get('/', (req,res)=>{
  res.render('home', {title:'Home', products: products})
})

app.get('/about', (req,res)=>{
  res.render('about', {title:'About'})
})

const PORT = 3003

app.listen(PORT, ()=>{
  console.log('server is running at port', PORT);
  
})