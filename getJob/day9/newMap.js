// `map()` and `new Map()` are different things.

// `map()` is an array method used to transform elements of an array.

// `new Map()` is a built-in ES6 object type used for key-value storage,
// similar to an object, but more powerful in some cases.

// Difference between Object and Map:

// In the case of `new Map()`:
// - Keys and values can be of any data type (number, string, object, function, etc.).
// - Insertion order is strictly preserved.
// - It has a built-in `size` property.

// In the case of Object:
// - Keys are automatically converted to strings (except Symbols).
// - It is mainly used for structured data (like JSON).
// - It does not have a direct `size` property.


const map=new Map();
map.set("key","value");

const obj={
    "key":"value"
}

map.set(obj,"value2")

obj[obj]="value2";

console.log(map);
// console.log(obj)