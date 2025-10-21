import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>parent button</button>
      <Child btnName={"childButton"} handleIncrement={handleIncrement} />
    </div>
  );
};

export default UseCallbackExample;

const Child = React.memo(({ btnName, handleIncrement }) => {
  console.log("Child Button got rerendered here ");
  return (
    <div>
      <button onClick={handleIncrement}>{btnName}</button>
    </div>
  );
});
