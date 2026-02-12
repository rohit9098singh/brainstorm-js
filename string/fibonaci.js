// function fibonaci(n){
//     if(n<=1){
//         return n;
//     }
//     else{
//         return fibonaci(n-1) + fibonaci(n-2)
//     }
// }

// let n=10;
// for(let i=0;i<n;i++){
//     console.log(fibonaci(i))
// }



const fibonaci=function fib(n){
    if(n==0 || n===1){
       return n
    }
    else{
        return fib(n-1) + fib(n-2)
    }
}

let n=10;
for(let i=0;i<n;i++){
    console.log(fibonaci(i))
}