import e from "express";
import express, { Express, Request, Response, NextFunction} from "express";
import {Iuser, Product} from './models/models.js';


const app:Express = express()
const port = 3000

app.use(express.json())


interface customRequest extends Request{
  startTime? : number
}
//middleware ->add startTime to request
app.use((req: customRequest, res: Response, next: NextFunction)=>{
  req.startTime = Date.now();
  next()
})

app.get("/", (req: Request, res: Response)=>{
  res.send("Hello : typescript with js")
})

//-> /user/id:?name -> Request <{paramenter-id},{res-body},{req-body},{query-params}{locals}> getting user name and mail from request body

interface User extends Request{
  name: string,
  email: string
}

app.post("/user", (req:Request<{}, {}, User>, res: Response)=>{
  const {name, email} = req.body
  res.json({
    message: `User created ${name}- email:${email}`
  })
})

app.get("/user/:id", (req: Request<{id: string}>, res: Response)=>{
  const {id} = req.params
  res.json({
    userId : id
  })
})

app.post("/fetch", async(req:Request, res: Response)=>{
  try {
    const data: Iuser[] = await Product.find({})
  } catch (error) {
    console.log(error);
    
  }
})
app.listen(port, ()=>{
  console.log("Server is running on port:",port);
  
})