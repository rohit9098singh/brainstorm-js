import { useState } from "react"

const InputA = ({ input, setInput }) => {
  return (
    <input 
      type="text" 
      value={input} 
      onChange={(e) => setInput(e.target.value)} 
    />
  )
}

const InputB = ({ input, setInput }) => {
  return (
    <input 
      type="text" 
      value={input} 
      onChange={(e) => setInput(e.target.value)} 
    />
  )
}

const App = () => {
  const [input, setInput] = React.useState("");

  return (
    <div>
      <p>{input}</p>
      <InputA input={input} setInput={setInput} />
      <InputB input={input} setInput={setInput} />
    </div>
  )
}

