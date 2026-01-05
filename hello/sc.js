const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
];

function sixthFunction(arr){
    const oldest=arr.reduce((acc,curr)=>curr.age > acc.age ? acc.age : curr.age)
    return oldest
}
console.log(sixthFunction(people))



function outer() {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  function logCount() {
    console.log("Current count:", count);
  }

  return function inner() {
    increment();   // remembers outer function
    logCount();    // remembers outer function
  };
}

const fn = outer();

fn(); // Current count: 1
fn(); // Current count: 2
