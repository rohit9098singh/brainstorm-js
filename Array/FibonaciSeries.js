// const fibonacci=function fib(n){
//     if(n==0 || n==1){
//         return 1
//     }
//     else{
//         return fib(n-1) + fib(n-2);
//     }
// }


let num=10;
console.log("fibonacci series")
for(let i=0;i<num;i++){
    console.log(fibonacci(i))
}


const factorial=function fact(n){
 
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// Example
console.log(factorial(5)); // Output: 120


const fibonacci=function fib(n){
  if(n===0 || n===1){
        return 1 
  }
  else{
   return  fib(n-1) + fib(n-2)
  }
}

let num2=10;
for(let i=0;i<num2;i++){
  console.log(fibonacci(i))
}