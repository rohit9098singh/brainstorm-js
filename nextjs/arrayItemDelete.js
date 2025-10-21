// 1. Using splice() (best choice)

// Mutates the array, removes elements from a position.

let arr = [10, 20, 30, 40];
arr.splice(1, 1);  // remove 1 element at index 1
console.log(arr);  // [10, 30, 40]

// 2. Using filter()

// Creates a new array (does not mutate).

let arr2 = [10, 20, 30, 40];
let newArr1 = arr.filter(item => item !== 20);
console.log(newArr1);  // [10, 30, 40]

// 3. Using pop()

// Removes the last element.

let arr3 = [10, 20, 30];
arr.pop();
console.log(arr);  // [10, 20]

// 4. Using shift()

// Removes the first element.

let arr4 = [10, 20, 30];
arr.shift();
console.log(arr);  // [20, 30]

// 5. Using delete operator ❌ (not recommended)

// Removes the value but leaves an empty hole.

let arr5 = [10, 20, 30];
delete arr[1];
console.log(arr);       // [10, empty, 30]
console.log(arr.length) // 3 (still same length!)

// 6. Using slice()

// To create a new array without mutating (similar to filter).

let arr6 = [10, 20, 30, 40];
let newArr = arr.slice(0, 1).concat(arr.slice(2));
console.log(newArr);  // [10, 30, 40]



function abc(a,b,c){

}

function cbd(a=0,b,c){

}

console.log("check it out",abc.length,cbd.length)

// .length function ke unhi parameters ko count karta hai jo pehle default/rest parameter aane se pehle hote hain.