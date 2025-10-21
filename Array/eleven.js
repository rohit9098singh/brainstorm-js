function interCetion(arr1, arr2) {
    let merged = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !merged.includes(arr1[i])) {
            merged.push(arr1[i]);
        }
    }
    return merged;
}
console.log(interCetion([1,2,3,4],[2,3,4,5])); 
// [2,3,4]
 


//Merge two objects (second object’s properties take priority
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 20, d: 4 };

const merged = { ...obj1, ...obj2 };

console.log(merged);
// { a: 1, b: 20, c: 3, d: 4 }


// Find all keys where values > 10
const obj = { a: 5, b: 15, c: 8, d: 20 };

const keysGreaterThan10 = Object.keys(obj).filter(key => obj[key] > 10);

console.log(keysGreaterThan10); 
// ["b", "d"]

// repalce empty space with -
const str = "Hello World This Is JS";
const result = str.split(" ").join("-");

console.log(result);
// "Hello-World-This-Is-JS"


