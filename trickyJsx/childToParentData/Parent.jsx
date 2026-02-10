import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [dataFromChild, setDataFromChild] = useState(null);
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };
  return (
    <div>
      <h1>Data From Child {dataFromChild}</h1>
      <Child onSendData={handleDataFromChild} />
    </div>
  );
};

export default Parent;



