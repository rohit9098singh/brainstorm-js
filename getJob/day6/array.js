// let x=[100,200,300];
// let y=[100,200,300];

// let z=y;//means both point to the same array in memory.
// console.log(x==y); // false
// console.log(z==y); // true
// console.log(z==x)  // false


const obj2={
    pqr:100,
    abc:200,
    xyz:{
        pqr:300,
        abc:400
    }
}

const {pqr,abc,xyz:{pqr:p}}= obj2
console.log(pqr,abc,p)

function smallest(str){
    const words = str.split(" ");
    let smallest = words[0];
    for (let word of words){
        if (word.length < smallest.length){
            smallest = word;   
        }
    }
    return smallest;
}

console.log(smallest("this is the helloword")); 


// Warning: Each child in a list should have a unique "key" prop.

console.log(false === ![]);
console.log("i think it is false",false == [])  // [] is an object, false is boolean → type coercion

const arr=[1,2,3,4];
const str="1,2,3,4"
console.log(arr== str)



// | Expression       | Evaluates to | Explanation                                             |
// | ---------------- | ------------ | ------------------------------------------------------- |
// | `[] == ""`       | true         | `[]` → `""` (toString) → `"" == ""` ✅                   |
// | `[] == 0`        | true         | `[]` → `""` → Number(`""`) = 0 → `0 == 0` ✅             |
// | `false == []`    | true         | `false` → 0, `[]` → `""` → 0 → `0 == 0` ✅               |
// | `false == ![]`   | true         | `![]` → false → `false == false` ✅                      |
// | `[1,2] == "1,2"` | true         | `[1,2].toString()` → `"1,2"` → `"1,2" == "1,2"` ✅       |
// | `false == [1]`   | false        | `[1].toString()` → `"1"` → Number("1") = 1 → `0 == 1` ❌ |
// | `!![]`           | true         | `[]` truthy → double NOT → true ✅                       |
// | `![]`            | false        | `[]` truthy → NOT → false ✅                             |


let obj={
    name:"Rohit"
}

let newObj=obj;
newObj.name="rihsu";
console.log("i think that doesent change",obj)
console.log(newObj)


const arr2=[1,2,3,4,5,2,3,5]
function getAllDublicates(arr){
    let seen={}
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        if(seen[arr[i]]){
            newArray.push(arr[i])
        }
        else{
            seen[arr[i]]=true
        }
    }
    return newArray
}
console.log("check for all the dublicates ",getAllDublicates(arr2))
// console.log("with set check",new Set(arr2))


// to split at the point of capital letters

function SplitFunction(str) {
    let res = "";
    for (let char of str) {
        if (char === char.toUpperCase() && res.length > 0) {
            res += " ";  // add space before uppercase
        }
        res += char; // always add the char
    }
    return res;
}

console.log("splitted value:", SplitFunction("MyNameIsRohitSingh"));
// Output: "My Name Is Rohit Singh"


// function check (a,...b){  
//   console.log("hello")
// }
// check(1,2,3,3,4)

//=================================
function myFun(a,...b){
    console.log("hello ");
    console.log(b);
    return a;
    console.log(a+b)
}
console.log(myFun(1,2,3,4,5))

//===================================
// console.log("my marks is",marks);
marks=400;
console.log("my name is ",marks)


//==================================
function one(a=5,b=7){
    console.log(a+b)
}

one(undefined,20);//Agar parameter ka value undefined hai aur uske liye default value defined hai → JS default value use karega.

function two(a=2,b){
    console.log("here",a+b);//Default parameter sirf tab apply hota hai jab argument undefined ho.
}
two(null,20)

//================================
var sum = 100 +score;
var score=1000;
console.log("sum value ",sum)

// var score=100 + newVal;
// newVal=100
// console.log(score)

// ==================
console.log("2"-"2")


function countVal(str) {
    let count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

console.log("Character count:", countVal("my name is rohit singh"));
