function App() {
    const [count, setCount] = React.useState(0);

    console.log("render", count);

    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(prev => prev + 1);
    };

    return <button onClick={handleClick}>Click</button>;
}

// 🔹 Initial render
// render 0
// 🔹 After click
// render 2

// =========================================================================================================

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount(c => c + 1);
      setCount(c => c + 1);
    }, 1000);
  };

  console.log("render", count);

  return <button onClick={handleClick}>Click</button>;
}

// only one render 
// render 0
// render 2
// React 18 me automatic batching async code me bhi hoti hai, isliye dono updates ek hi render me combine ho jaate hain.

// =========================================================================================================

import { startTransition, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);

    startTransition(() => {
      const newList = Array(10000).fill(e.target.value);
      setList(newList);
    });
  };

  return <input onChange={handleChange} />;
}

// Input field pehle update hoga, list baad me.
// 🔥 Reason (important line)
// startTransition ke andar wala update low priority hota hai, isliye urgent update (input) pehle render hota hai.

// =========================================================================================================

function App() {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  console.log("input:", input);
  console.log("deferred:", deferredInput);

  return <input onChange={(e) => setInput(e.target.value)} />;
}
// input immediately update hoga, lekin deferredInput thoda delay se update hoga.
// 🔥 Reason
// useDeferredValue heavy updates ko delay karta hai taaki UI responsive rahe.


// =========================================================================================================

<Suspense fallback={<h1>Loading...</h1>}>
  <ComponentA />
  <ComponentB />
</Suspense>


// what are the common issue that we can think of when we call an api inside the useEffect
// When calling an API inside useEffect, common issues include multiple re-renders causing repeated API calls,
// incorrect dependency arrays leading to infinite loops, race conditions where outdated responses override newer ones, 
// and memory leaks when updating state after unmount. These can be fixed using proper dependency management,
//  AbortController for cancellation, cleanup functions, and handling loading and error states properly.