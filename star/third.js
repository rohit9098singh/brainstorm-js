function pyramid(n){
    for(let i=0;i<n;i++){
        console.log(" ".repeat(n-i) + "* ".repeat(i))
    }
}
pyramid(5)
