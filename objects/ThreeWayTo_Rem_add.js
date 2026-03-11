// 1️⃣ Object.fromEntries() kya hota hai
// Ye method array of key-value pairs ko object me convert karta hai.

// const arr = [
//   ["a", 1],
//   ["b", 2],
//   ["c", 3]
// ];

// const obj = Object.fromEntries(arr);

// console.log(obj);

// { a:1, b:2, c:3 }

//======================================= three ways to delete object property==========================================

const obj={a:1,b:2,c:3,d:4};

delete obj.a;
console.log(obj) // this mutate the original array

// 2nd way using destrc
let a={a:1,b:2,c:3,d:4};

let {b,...rest}=a;
console.log("kya b evalute hogya hai isme kga ",rest)

//3rd object.entries and filter

const obj3 = {a:1,b:2,c:3,d:4};

const result = Object.fromEntries(
  Object.entries(obj3).filter(([key]) => key !== "b")
);

console.log(result);

//======================================= three ways to add object property==========================================

const obj4 = {a:1,b:2,c:3,d:4};

obj4.e = 5;

console.log(obj4);
 
// 2nd

let obj5 = {a:1,b:2,c:3,d:4};

let newObj = { ...obj5, e:5 };

console.log(newObj);

// 3rd

const obj6 = {a:1,b:2,c:3,d:4};

const result2 = Object.fromEntries([
  ...Object.entries(obj6),
  ["e",5]
]);

console.log(result);