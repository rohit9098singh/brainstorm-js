console.log([] == []) // true
console.log([] == ![]) // empty array ek truthy value hota hai uska negate karne se false me convert hota hai 

// second question 

let a = {
    value: 1,
    valueOf() {
        return this.value++
    }
} //?? we need to provide a value so that below becomes true

if (a == 1 && a == 2 && a == 3) {
    console.log("yes")
}

// a ek object hai
// 👉 Jab tum a == 1 likhte ho, JavaScript internally bolta hai:

// “Object ko number me convert karo”

// Aur uske liye valueOf() call hota hai


// third question 

let a1 = Number();
let b = Number(undefined)
console.log({ a1, b })  // { a1: 0, b: NaN }

// aise isliye hota hai kyu ke NUmber se agar hm kuch banate hai 
// bina koi value ke to kya js usko by defalt 0 assign kar deta hai 
// isliye undefine proper number me conver nhi ho sakta hai isliye vo nan aaya 


// fourth question ==> ^ working
// when two number are done zor with each other we get =0
// when 0 ^ number = number 

console.log(3 ^ 3); // 0
console.log(0 ^ 4);

// swap a ,b using zor 
let num1 = 2;
let num2 = 4

num1 = num1 ^ num2;
num2 = num1 ^ num2
num1 = num1 ^ num2


// very imporatant question 

let s1 = "this is key";

// 🔹 Object creation
const obj = {
    "s1": "this is value",     // 👉 normal string key ("s1")
    [s1]: "this is also value" // 👉 computed key → value of s1 ("this is key")
};

// 🔹 Internally object becomes:
/*
const obj = {
    s1: "this is value",
    "this is key": "this is also value"
};
*/

// 🔹 toString() behavior
console.log("s1".toString());   // 👉 "s1" (already a string)

console.log([s1].toString());   // 👉 "this is key"
                                // [s1] = ["this is key"]
                                // array.toString() joins elements

// 🔹 Accessing values
console.log(obj.s1);                 // 👉 "this is value"
console.log(obj["this is key"]);     // 👉 "this is also value"



console.log(typeof null);
console.log(null instanceof Object);     // false
console.log(Object instanceof Object);  // true

// JavaScript check karega:

// kya null ka prototype chain hai? ❌
// nahi hai → to match hi nahi hoga

// 👉 result = false