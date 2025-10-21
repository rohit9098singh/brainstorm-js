const days = ["Sunday", "Monday"];
const idx1 = days.findIndex(day => day === "Tuesday");
console.log(idx1);   //-1
const idx2 = days.findIndex(day => day === "sunday");
console.log(idx2);//-1


// array.includes(searchElement, fromIndex)
// searchElement → कौन-सा element खोजना है।
// fromIndex → किस index से search शुरू करनी है। (optional)
const arr=[1,2,3,4]
console.log(arr.includes(2,-1)); // true


//  i ahve to delete last three of any aray length
const arr2 = [10, 20, 30, 40, 50];

const last3 = arr2.slice(-3);
console.log(last3); 


// remove last 3 elements and return them
const res = arr.splice(-3);
console.log(res); 


// scope and shadowing 

var a = 50;         // a = 50 (global scope)

// Block-1
{
    var a = 100;    // var is function/global scoped, so this REDECLARATION 
                    // overrides previous a → now a = 100
}

var b = a;          // b = 100 (because a is now 100)

// Block-2
{
    let b = 500;    // this b is block-scoped, valid only inside this block
}                   // after block ends, this b (500) is destroyed

console.log(b);     // prints 100

// swap 
function swap(x, y) {
  console.log("Before swap: x =", x, ", y =", y);

  // temp variable
  let temp = x;
  x = y;
  y = temp;

  console.log("After swap:  x =", x, ", y =", y);
}

// call function
swap(10, 20);

function swap2(x, y) {
  console.log("Before swap: x =", x, ", y =", y);

  [x, y] = [y, x];   // destructuring assignment

  console.log("After swap:  x =", x, ", y =", y);
}

// call function
swap2(10, 20);

// check 
const arr4 = ["rohit", "hit"];

// check if arr[1] is substring of arr[0]
const result = arr4[0].includes(arr[1]);

console.log(result); // true



// with null dependency useeffect
useEffect(() => {
  console.log("Effect ran");
}, null);
// React expects the second argument to be an array (or undefined).
// Passing null will throw a runtime error:


// react ke compoenet ko first leter capital he q likhte hai one liner hinglsih ans
// =>Because React treats components starting with a capital letter as custom components, otherwise it assumes they are HTML tags.