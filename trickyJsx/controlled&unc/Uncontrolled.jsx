import React, { useRef } from "react";

const Uncontrolled = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value); // DOM se direct value le raha hai
  };

  return (
    <div>
      <h2>Uncontrolled Component</h2>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Show Value</button>
    </div>
  );
};

export default Uncontrolled;
