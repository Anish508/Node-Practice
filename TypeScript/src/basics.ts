import { log } from "console";
import { get } from "http";

console.log("Hello node js from ts");

//basis types

let list: Array<number> = [1,5,6,4,9]

//any type
let randomType: any = 4

randomType = "Anish"
randomType = true

console.log(randomType);


let xyz : undefined = undefined
let x : null = null

enum color{
  red, green, blue
}

let d = color.blue
console.log(d);


let abc : [string, number ] = ['hii', 123]

/* interfaces and types */

interface User{
  name: String,
  id : number,
  email?: String //optional
  readonly createdAt : Date
}

const user : User = {
  name : "Anish",
  id : 1,
  createdAt: new Date(),
  email: "abc@gmail.com"
}

  console.log(`name${user.name}, id : ${user.id}, createAt: ${user.createdAt}`);


type Product = {
  title : string
  price: number
}

const Product1 : Product = {
  title : "Electronics",
  price: 100
}

function multiply(a:number, b:number): number{
  return a * b
}
const result:number = multiply(3, 5)
console.log(result);

const add = (num1: number, num2: number): number=>{
  return num1 + num2
}
log(add(5,8))

function greet(name: string, greeting?: String): String{
  return `${greeting} ${name}`
}
console.log(greet("Anish","hello"));
