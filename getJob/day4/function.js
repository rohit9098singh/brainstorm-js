// function.length property function ke defined parameters (arguments) ki count return karti hai, default ya rest parameters ko count nahi karti.

function example(a, b, c) {}
console.log(example.length); // 3

// Yahan length 3 return karta hai kyunki function ke 3 defined parameters hain: a, b, c.

// Agar koi parameter default value ke saath ho ya rest parameter (...args) ho, to ye count me include nahi hota.

function test(a, b = 2, ...rest) {}
console.log(test.length); // 1, sirf 'a' count hota hai


// let abc="Rohit";
// function fn(){
//     console.log(abc);
//     let abc="ajmal"
// }
// fn();


// Yes! In a React app, if you want a JavaScript variable or function to be globally accessible, 
//  there are a few ways. Let’s go through them carefully:

// window is the global object in the browser.

// Anything you attach to it becomes globally accessible anywhere in your app


// 1
abc() // ?

var abc = function () {
    console.log("I am first");
}

// 2
abc() // ?

function abc() {
    console.log("i am last");
}

abc() // ?
