function reverseName(name){
     for(let i=name.length;i>=0;i--){
        console.log(name.slice(0,i)) 
     }
}

reverseName("rohit")

function invertedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    console.log("* ".repeat(i));
  }
}

invertedTriangle(5);
