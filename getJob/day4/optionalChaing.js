// Optional chaining is a safe way to access nested properties of an object without 
// causing an error if some part of the path is null or undefined.

// const user = {}; 
// console.log(user.address.street); // ❌ Error: Cannot read property 'street' of undefined


// const user2 = {}; // address doesn’t exist

// console.log(user2.address?.city); 
// user.address → JavaScript checks if address exists.
// Since it doesn’t exist, the ?. operator stops further evaluation.
// Instead of throwing an error, it returns undefined.
// If address did exist, then .city would be accessed normally.


// 1. The Problem with ||
// || treats all falsy values (0, "", false, null, undefined) as “missing”:
let score = 0;

let result = score || 10; 
console.log(result); // 10 ❌


let score2 = 0;

let result2 = score ?? 10;
console.log(result2); // 0 ✅
