function groupBy(arr, key) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i][key];

    if (value === undefined) continue;

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(arr[i]);
  }

  return result;
}

const arr2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie" },
];

console.log(groupBy(arr2, "age"));





