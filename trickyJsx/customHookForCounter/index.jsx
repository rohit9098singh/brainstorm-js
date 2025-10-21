import { useState } from "react";

const index = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return {
    counter,
    increment,
    decrement,
  };
};

export default index;

const App = () => {
  const { counter, increment, decrement } = index();
  return (
    <div>
      <button onClick={decrement}>Decrease</button>
      <div>Count: {counter}</div>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

