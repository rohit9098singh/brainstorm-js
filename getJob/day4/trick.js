if ([]) {
  console.log("if chal gaya");
} else {
  console.log("else chal gaya");
}
// Ek empty array [] bhi ek object hai.
// Objects (chahe empty ho) JS me truthy hote hain.
// Isliye condition true banegi aur if block execute hoga.


// destructuring of array
const arr2 = [10, 20, 30];

const [a,b,c] = arr2;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


const arr = [10, 20, 30, 40, 50];

const [first, ...rest] = arr;

console.log(first); // 10
console.log(rest);  // [20, 30, 40, 50]


function check(){
  return 100;
}
var check =10;
console.log("fucntio chala na chaeye",check)

console.log(parseInt("F78")) //NAN
console.log([1,2,3,4].map(e=>{
  if(e>0) return ;
  // return e*8
}))   // undefined undefined undefined

// Babel

// What it is: A JavaScript compiler (or transpiler).
// Purpose: Converts modern JavaScript (ES6+, JSX, TypeScript) into older JavaScript that can run in all browsers.

// Webpack

// What it is: A module bundler.
// Purpose: Takes your project files (JS, CSS, images, etc.) and bundles them into one or more files for the browser.


// 2. Advantages of Redux over Context API

// Centralized State

// Redux stores all application state in a single global store.

// Context API often requires multiple contexts for different pieces of state.

// Predictable State Updates

// Redux uses pure reducers and actions, making state changes predictable and easy to trace.

// Context API doesn’t enforce any structure—updates can happen anywhere, potentially causing unpredictable behavior in large apps.

// Better Performance for Large Apps

// Context API triggers a re-render of all consuming components whenever the context value changes.

// Redux can optimize with connect() or useSelector, re-rendering only components that depend on changed state.

// Middleware Support

// Redux has middleware like redux-thunk or redux-saga for handling asynchronous actions elegantly.

// Context API doesn’t have built-in middleware, so async logic can become messy.

// Developer Tools

// Redux has excellent DevTools for logging, time-travel debugging, and inspecting state changes.

// Context API doesn’t provide this out-of-the-box