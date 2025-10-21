function addNum(){
    // console.log(add)
    return 100+100;
}

function subtractNum(){
    // console.log(sub);
    return 100 - 100;
}

const a=(addNum(),subtractNum());
console.log(a)

// The comma operator (expr1, expr2) evaluates both expressions, left to right.
// Only the last expression’s value is returned.
// addNum() → returns 200 → ignored
// subtractNum() → returns 0 → this is the value of the whole expression



// Browser Object Model (BOM)
// Not part of HTML or DOM, but provided by the browser.

// Lets you do things like:
// Open or close browser windows
// Get or set URL
// Work with browser history
// Get information about the browser or screen


// let numVal=2;
// let b=!--numVal;
// let c=!--numVal;
// console.log(b,c)  // false true

