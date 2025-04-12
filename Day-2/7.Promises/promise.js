/* const { resolve } = require("path");

function delayfn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log("Promise is loading");

delayfn(2000).then(() => {
  console.log("After 2 sec callback will resolve");
});
console.log("end"); */

function devide(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Cannon perform div by 0 op");
    }
    resolve(num1 / num2);
  });
}

devide(10, 0)
.then((res) => {
  console.log(res);
})
.catch((err)=>{
  console.log("Error:",err);
  
})
