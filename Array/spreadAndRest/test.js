
//spread= spread oeprator is used spread the element of the itterable into an individual element 
//rest= when we dont how many elements would be passed as an argument then we can go for rest operator
// Spread

//spread= takes array and object and spread then into individual element
// rest=take inidividual elemts and pack them into an array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, ...arr1]; // expands arr1 into arr2
console.log(arr2); // [4, 5, 1, 2, 3]

// Rest
function sum(a, b, ...rest) { // collects extra arguments into "rest"
    console.log(a, b, rest);
}
sum(1, 2, 3, 4, 5); // 1 2 [3, 4, 5]

//======================================  question 1 ======================================
const narr1 = [1, 2, 3];
const narr2 = [4, 5];
const arr3 = [6, ...narr1, 7];

 console.log(arr3); 
 
// output :[6 1 2 3 4 5 7]

//======================================  question 2 ======================================

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3, 4];
console.log("checked value at here ",sum(...numbers));

// output =  6

//======================================  question 3 ======================================

const [first, ...rest] = [10, 20, 30, 40];
console.log(first, rest);

// output 10 [ 20, 30, 40 ]

//======================================  question 4 ======================================

const { name, ...other } = { name: "Rohit", age: 21, city: "Delhi" };
console.log("tricky part at here ",name, other);

//output: Rohit { age: 21, city: 'Delhi' }

//======================================  question 5 ======================================
const arr = [1, [2, 3], 4];
const copy = [...arr];

copy[1][0] = 99;
console.log(arr); 
console.log(copy) 

// output :[1,[99,3] ,4]

//======================================  question 6 ======================================

// If you are building a function mergeAndRemoveDuplicates(...arrays) that takes multiple arrays 
// and returns a new array with unique elements, how would you use spread/rest to solve it?

 


// let arr = [3, 1, 2];
// let sorted = arr.sort();


// console.log(sorted); // [1, 2, 3]
// console.log(arr);    // [1, 2, 3]  ❌ original bhi change ho gaya


// let arr = [3, 1, 2];
// let sorted = arr.toSorted();


// console.log(sorted); // [1, 2, 3]  ✅ naya array
// console.log(arr);    // [3, 1, 2]  ✅ original safe hai


var x = 23;
(function () {
  var x = 43;
  (function random() {
    x++;
    console.log("check your ",x);
    var x = 21;
  })();
})();

// NaN