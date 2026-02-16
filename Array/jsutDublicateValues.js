function toGetOnlyDublicate(arr) {
  let seen = {};
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
   // newArray.push(arr[i])  jsut uncomment this and comment the else will get the non-bublicte values
    }
    else {
      newArray.push(arr[i])

    }

  }
  return newArray
}

console.log(toGetOnlyDublicate([1, 2, 3, 4, 4, 2]));

// 👉 [4, 2]


let str2 = "my name is rohit hi";

function checkHi(str2) {
  return str2.includes("hi");
}

console.log(checkHi(str2)); // true (because "rohit" has "hi")


let str = "my name is rohit hi";

function countHi(str) {
  return (str.match(/hi/g) || []).length;
}

console.log("what is the out put for this check at here", countHi(str)); // 2



const str1 = "Sk";
const str3 = "Badsha";
const str4 = str1 && str3;
console.log(str4);

// So the answer is "Badsha".
// 👉 Reason: && checks str1 → it’s truthy → moves to str2 → also truthy → returns str2.


let a = 100;
const b = ++a + a++
// ++a → pre-increment: a becomes 101, value used = 101.
// a++ → post-increment: current a = 101 is used, then a becomes 102.
// So, b = 101 + 101 = 202

// const b=a++ + ++a 
console.log("b i guess would be the 202",b)
// a++ → post-increment: use a = 100, then a becomes 101.
// ++a → pre-increment: a becomes 102, value used = 102.
// Sum: b = 100 + 102 = 202


// weekmap
// set

const obj = {},
  obj2 = { name: "sankalp" },
  obj3 = { name: "jaiswal" };

obj[obj2] = { name: "developer" };
// When an object is used as a key, JavaScript internally calls its toString() method:
// obj2.toString(); // "[object Object]"
obj[obj3] = { name: "React" };  //obj["[object Object]"] = { name: "React" };

console.log(obj);
// {
//   "[object Object]": { name: "React" }
// }


// Bold (visual only)	Used just to make text look bold (no special meaning).	Text appears bold
// <strong>	Strong importance (semantic)	Used to indicate that text is important or has emphasis.
//      Screen readers will read it with more emphasis.

// weak map map ke jaisa he hota hai but but uska key hamesha ek object hota hai
// let wm = new WeakMap();
// let obj = {};

// wm.set(obj, "secret info");

// console.log(wm.get(obj)); // "secret info"

// obj = null; // object destroyed
// // WeakMap se bhi auto remove ho jayega



// function abc(a,...b){
//     console.log(b,typeof b)
// }

// abc(10,8,7)