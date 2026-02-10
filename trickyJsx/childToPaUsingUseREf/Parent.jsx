// Parent.jsx
import React, { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const inputRef = useRef(null);

  const handleGetData = () => {
    alert("Data from child: " + inputRef.current.value);
  };

  return (
    <div>
      <Child ref={inputRef} />
      <button onClick={handleGetData}>Get Data From Child</button>
    </div>
  );
};

export default Parent;



