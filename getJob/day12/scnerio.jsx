// What is the output/behavior and why?

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(count);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <button onClick={() => setCount(count + 1)}>Click</button>;
}

// What is the bug here? What concept does this demonstrate? How do you fix it?
// stlae value rakhta hai kyu ke vo bas ek bar chltra hai fix ye hai ke dependecy me count pass karo taki 
// jab count change ho tab tab vo new value ke sath useefect initite ho
// or use like blow

import { useState, useEffect, useRef } from "react";

function Counter2() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  // keep ref updated with latest count
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  // interval runs once, but always reads latest value from ref
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(countRef.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <button onClick={() => setCount(count + 1)}>
      Click ({count})
    </button>
  );
}

export default Counter2;


console.log("==========================================================================================")

// What is the difference between these two patterns and when would you use each?

const [state, setState] = useState({ name: "", age: 0 });

// Pattern B
const [name, setName] = useState("");
const [age, setAge] = useState(0);

// Pattern A stores related data in a single object, which is useful for grouped state like forms
// but requires careful updates to avoid overwriting. Pattern B uses separate state variables,
// making updates simpler and more readable. I prefer separate state for independent values
// and object state when the data is closely related.