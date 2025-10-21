// import React from "react";

// const Child = ({ onSendData }) => {
//   const handleCLick = () => {
//     const data = "hello";
//     onSendData(data);
//   };
//   return <button onClick={handleCLick}>click me</button>;
// };

// export default Child;
import React from 'react'

const Child = ({onSendData}) => {
  const handleCLick=()=>{
    const data="jello";
    onSendData(data)
  }
  return (
    <div>
         <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Child