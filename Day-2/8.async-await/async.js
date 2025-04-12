// function delayfn(time){
//   return new Promise((resolve)=>setTimeout(resolve , time) )
// }

// async function delayedGreet(name){
//   await delayfn(2000)
//   console.log(name);
  
// }
// delayedGreet("Anish")

// console.log("end");


async function devision(num1, num2){
  try {
    if(num2 === 0) throw new Error("cannot devide by zero")
    return num1/ num2
  } catch (error) {
    console.log("Error:",error);
    return null
  }
}
async function mainFn(){
  console.log(await devision(10,2));
  console.log(await devision(10,0));
  
}
mainFn()