let a = 10;
let a = 20;   // ❌ SyntaxError: Identifier 'a' has already been declared
console.log(a);



var a = 10;
var a = 20;   // ✅ Allowed, overwrite ho jaata hai
console.log(a); // 20



var a = 10;
let a = 20;   // ❌ SyntaxError: Identifier 'a' has already been declared
console.log(a);


let a = 10;
var a = 20;   // ❌ SyntaxError: Identifier 'a' has already been declared
console.log(a);


// In JavaScript, var is function-scoped and allows redeclaration, because it’s part of the language’s old design (1995) focused on simplicity and flexibility.

// This often caused silent bugs due to accidental redeclaration and scope leaks.

// ES6 (2015) introduced let and const, which are block-scoped and do not allow redeclaration in the same scope to make code safer and more predictable.

// Mixing var with let/const in the same scope is disallowed to avoid ambiguity.


// *, /, % (multiplication, division, remainder)
// +, - (addition, subtraction)
// / aur * same level ke hain → left to right chalega

let arr = ["z", "a", "b"];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr); // ["a", "b", "z"]


console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false
// NaN ka matlab hota hai Not-a-Number.

// IEEE-754 standard (jo JavaScript numbers ke liye use hota hai) me rule hai:
// 👉 NaN kabhi bhi kisi value ke equal nahi hota, apne aap ke bhi equal nahi hota.