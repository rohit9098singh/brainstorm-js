// let original = { name: "Rohit", address: { city: "Delhi" } };
// let clone = structuredClone(original);

// clone.address.city = "Mumbai";

// console.log(original.address.city);
// console.log(clone.address.city);

//  NORMAL FUNCTION 

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let original = { name: "Rohit", address: { city: "Delhi" } };
let clone = deepCopy(original);
clone.address.city = "Mumbai";
console.log(original.address.city); // Delhi (not changed)
console.log(clone.address.city);


function deepClone(obj) {
  // primitive ya null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // array
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  // object
  let newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]); // ⭐ yahin deep copy ho rahi
    }
  }
  return newObj;
}
