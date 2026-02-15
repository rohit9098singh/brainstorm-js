func();
var func = function () {
    console.log(" i am here ")
}
func();
function func() {
    console.log("my name is Rohit")
}
func();
function func() {
    console.log("i am there")
}
func()


function currying(val1) {
    return function (val2) {
        return function (val3) {
            return val1 + val2 + val3
        }
    }
}
console.log(currying(2)(3)(4))

let a = 100;
let z = a++;
console.log(a + z) // 201



let str = "my name is Rohit singh";

function check(str) {
    let words = str.split(" ");
    let res = [];
    for (let i = 0; i < words.length; i++) {
        let reversed = "";
        for (let j = words[i].length - 1; j >= 0; j--) {
            reversed += words[i][j]
        }
        res.push(reversed)
    }
    return res.join(" ");
}

console.log(check(str));


function charCount(str) {
    let count = {};
    for (let char of str) {
        if (char === " ") {
            continue
        }
        count[char] = (count[char] || 0) + 1
    }
    return count
}

console.log(charCount("Rohit sinfh"))

const res = [1, 2, 3, 4, 5].reduce((acc, curr) => acc * curr, 1)
console.log(res)



let abc = 100;
if (function xyz() { }) {
    // abc=abc-typeof(xyz) // 100 - Undefined
    console.log("what is the type of xyz at here that is undefined ", typeof (xyz))
}
console.log(abc) // output NaN


let obj = {
    xyz: "Rohit",
    pqr: function () {
        console.log(this.xyz)
    }
}

const c = obj.pqr;
obj.pqr();  // rohit
c();  // undefined


// includes ka ek aacha question 
let arr = ["rohit", "singh"];

let ans = arr.includes("singh", -2)

console.log(ans)


// new question with null nullish coalescing operator
let obj2 = {
    a: {
        b: undefined
    }
}

console.log(obj2.a?.b?.c?.d ?? "jatin") // undefined bz=nullish coalescing operator 
// left me agar null ya undefiend hai to usko left me assign kar deta hai or else right walla value lega


function infiniteCurrying(value1) {
    return function (value2) {
        if (!value2) {
            return value1
        }
        else {
            return infiniteCurrying(value1 + value2)
        }
    }
}
console.log(infiniteCurrying(1)(2)())


// figure  tag =>Used to wrap media content + optional caption.
{/* <figure>
    <img src="photo.jpg" alt="Mountain view">
    <figcaption>Sunrise in the Himalayas</figcaption>
</figure> */}


const arr3 = [1, 2, 3, 4, 4, 4, 5, 5, 5];

function findTheDuplicateElement(arr) {
    let seen = [];
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        if (seen.includes(arr[i])) {
            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        } else {
            seen.push(arr[i]);
        }
    }

    return duplicates;
}

console.log(findTheDuplicateElement(arr3));


let str3 = "My name is Baadhshsha sh"
const resultIndex = str3.indexOf("sh");
if (resultIndex !== -1) {
    console.log(str3.toLowerCase().includes("sh"), resultIndex)

}

// now you need to check that how many times sh is appearing at there ok
function countOccurrences(str, target) {
    console.log(str.toLowerCase().split(target).length)
    return str.toLowerCase().split(target).length - 1;

}

let newstr = "My name is Baadhshsha sh";
console.log(countOccurrences(newstr, "sh"));

// check for the function below what it will print out there 

const str1 = "sk"
const str2 = "Badsha"
const checkStr = str1 && str2
console.log(checkStr)

// undefined does not return true or false else it 
// evalutes based on it return first value it finds
// if non returns the last element



// increment and decrement 
let a1 = 100;
// const b=++a1 + a1++;
const b = a1++ + ++a1    // first it will be 100 then increase it to 101 then for ++a it take 101 not 100
// 100 + 102
console.log(b)


// sort the given arrray in assending order

const cArray = ["b", "d", "a", "c"];

function sortInAscending(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sortInAscending(cArray));


// a difficult question at here
let ab = 2;
let d = !--abc // 1 to 0
let e = !--abc // 1 to 0 
console.log(d,e) // 0 , 0 that is false,false

function sum(){
    console.log("hello");
    return 2+2
}

function square(){
      console.log("hi");
      return 4 *4
}

let val=(sum(),square()); // The comma operator: Evaluates expressions from left to right Returns the value of the LAST expression
console.log(val)





