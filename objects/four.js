function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };  
}

let objA = { name: "Rohit", age: 20 };
let objB = { role: "student", city: "Delhi" };
console.log(mergeObjects(objA, objB));

