// function groupBy(arr, key) {
//   return arr.reduce((result, curr) => {
//     if (curr[key] === undefined) {
//       return result
//     }
//     const placeHolder = curr[key];
//     if (!result[placeHolder]) {
//       result[placeHolder] = []
//     }
//     result[placeHolder].push(curr)
//     return result;
//   }, {})
// }

function groupBy(arr, key) {
  return arr.reduce((acc, curr) => {

    // agar key nahi hai to accumulator return karo
    if (curr[key] === undefined) {
      return acc;
    }

    const value = curr[key];

    // agar group exist nahi karta
    if (!acc[value]) {
      acc[value] = [];
    }

    acc[value].push(curr);

    return acc; // ✅ hamesha return
  }, {}); // ✅ initial accumulator
}

const arr = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie" },
]

console.log(groupBy(arr, "age"));


// with loop 

function groupBy(arr, key) {
  const result = {};   // final grouped object

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];

    console.log("what is the current data",curr)

    // agar key hi nahi hai to skip
    if (curr[key] === undefined) {
      continue;
    }

    const value = curr[key]; // e.g. 25, 30


    // agar pehle se group exist nahi karta
    if (!result[value]) {
      result[value] = [];
    }

    // current object ko us group me daal do
    result[value].push(curr);
  }

  return result;
}


const arr2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie" },
];

console.log(groupBy(arr2, "age"));





