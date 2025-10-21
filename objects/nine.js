// 7️⃣ Find all keys that have a specific value
function findKeysWithValue(obj, targetValue) {
  let keys = [];
  for (let key in obj) {
    if (obj[key] === targetValue) {
      keys.push(key);
    }
  }
  return keys;
}

let data = { a: 1, b: 2, c: 1, d: 3 };
console.log(findKeysWithValue(data, 1));

 