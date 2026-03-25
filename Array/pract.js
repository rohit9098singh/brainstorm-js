const fib=function fibonacci(n){
      if(n==0 || n==1){
        return 1;
      }
      else{
       return  n * fib(n-1)
      }
}

console.log(fib(6))