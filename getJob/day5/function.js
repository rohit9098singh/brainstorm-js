 console.log(typeof(function hello(){})) // function 

//  let’s prove that a function is really an object in JavaScript
function greet() {
  return "Hello!";
}

greet.language = "English";   

console.log(greet.language);  

// function inside the if block

 if (function(){}) {
  console.log("Function is truthy");
} else {
  console.log("Function is falsy");
}

// fucntion isndie the if block

let x=20;
if(function solve(){}){
    x=x+typeof(solve);   
}
console.log(x);


