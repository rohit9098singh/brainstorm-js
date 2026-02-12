import { useRef, useState } from "react";

export default function UseRefTest() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);


  const incrementState = () => {
    setCount(prev => prev + 1);
  };

  const incrementRef = () => {
    countRef.current += 1;
  };

  return (
    <>
      <h2>State Count: {count}</h2>
      <h2>Ref Count: {countRef.current}</h2>

      <button onClick={incrementState}>Increment State</button>
      <button onClick={incrementRef}>Increment Ref</button>
    </>
  );
}
