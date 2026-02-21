"use client"
import { useState, useEffect } from "react";

function MyForm() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 4);
    }, 0);

    setCount(count + 1);
  }, []);

  console.log(count);

  return <h1>{count}</h1>;
}

export default MyForm


// Final Console Output
0
1
4

// final ui 
4

// second question at here how does the output looks in console and in the brower
function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 2);
    }, 0);

    setTimeout(() => {
      setCount(count + 3);
    }, 0);
  }, []);

  console.log(count);

  return <h1>{count}</h1>;
}

// cosole => 0 2 3
// browser => 3

// Third question at here how does the output look in console and in the brower

function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);

    setTimeout(() => {
      setCount(prev => prev + 5);
    }, 0);
  }, []);

  console.log(count);

  return <h1>{count}</h1>;
}

// cosole => 0 1 6
// browser => 5

// Fourth question at here how does the output look in console and in the brower
function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    setCount(count + 1);
  }, []);

  console.log(count);

  return <h1>{count}</h1>;
}

// console => 0,1
// browser => 1

// Fifth question at here how does the output look in console and in the brower
function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
      setCount(count + 1);
    }, 0);
  }, []);

  console.log(count);

  return <h1>{count}</h1>;
}

// console = 0,1
// browser = 1