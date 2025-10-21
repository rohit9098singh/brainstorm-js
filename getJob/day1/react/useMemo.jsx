import { useMemo, useState } from "react";

export const ForUseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const heavyOperation = (num) => {
    for (let i = 0; i < 100000000; i++) {} // time consuming task
    return num * 2;
  };

  const doubledValue = useMemo(() => heavyOperation(input), [input]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prev => prev + 1)}>increment</button>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>{doubledValue}</p>
    </div>
  );
};
