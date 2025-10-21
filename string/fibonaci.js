function fibonaci(n){
    if(n<=1){
        return n;
    }
    else{
        return fibonaci(n-1) + fibonaci(n-2)
    }
}

let n=10;
for(let i=0;i<n;i++){
    console.log(fibonaci(i))
}