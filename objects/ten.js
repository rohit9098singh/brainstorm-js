// let original = { name: "Rohit", address: { city: "Delhi" } };
// let clone = structuredClone(original);

// clone.address.city = "Mumbai";

// console.log(original.address.city);
// console.log(clone.address.city);

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let original = { name: "Rohit", address: { city: "Delhi" } };
let clone = deepCopy(original);
clone.address.city = "Mumbai";
console.log(original.address.city); // Delhi (not changed)
console.log(clone.address.city);
