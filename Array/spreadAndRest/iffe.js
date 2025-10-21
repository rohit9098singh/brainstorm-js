(() => {
  console.log("Arrow IIFE");
})();

// ================================ question 2 ================================
const result = (function(a,b){
  return a + b;
})(2,3);
console.log(result);

// ================================ question 3 ================================
const counter = (function(){
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count
  }
})();
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement());
console.log(counter.count);

// ================================ question 4 ================================
(function(){
  var a = 10;
  console.log("IIFE 1:", a);
})();

(function(){
  var a = 20;
  console.log("IIFE 2:", a);
})();

// ================================ question 5 ================================
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  // ❌ useEffect me async function directly nahi likh sakte
  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const result = await response.json();
    setData(result);
  }, []);

  return (
    <div>
      <h1>Wrong Example</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // ✅ IIFE ke andar async await allowed hai
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const result = await response.json();
      setData(result);
    })();
  }, []);

  return (
    <div>
      <h1>Correct Example</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}


// React ke useEffect hook ka callback ya to kuch bhi return nahi karta,
// ya ek cleanup function return karta hai (jo component unmount hone par chale).

// Lekin agar tum useEffect ke callback ko async bana dete ho,
// to wo hamesha ek Promise return karta hai,
// aur React Promise ko cleanup function samajh nahi sakta,
// isliye async function directly useEffect ke andar allowed nahi hai.
// React cleanup ke liye sochta hai:

// “Mujhe ek function chahiye jisko main baad me bula sakun.”

// Par use milta hai:

// “Promise — jo to ek future value hai, function nahi!”

// React ye Promise na to execute kar sakta hai,
// na hi cleanup ke time pe use kar sakta hai.