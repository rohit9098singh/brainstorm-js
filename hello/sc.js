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