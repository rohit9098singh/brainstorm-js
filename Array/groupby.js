function groupBy(arr, key) {
  let result = {};

  for (let item of arr) {
    const value = item[key];

    if (value === undefined) continue;

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item);
  }

  return result;
}

const arr2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie" },
];

console.log(groupBy(arr2, "age"));




