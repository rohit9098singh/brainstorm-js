import React from "react";

const Child = ({ onSendData }) => {
  const handleCLick = () => {
    const data = "hello";
    onSendData(data);
  };
  return <button onClick={handleCLick}>click me</button>;
};

export default Child;
