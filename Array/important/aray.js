const arr2=["rohiiit","rohit"]
function betterVersion(arr){
   return   arr[0].includes(arr[1])
}
console.log(betterVersion(arr2))

// seperate one did it number in one array tw digit number in another arrray and three digit in another array

function segregateArray(arr) {
  let single = [];
  let double = [];
  let triple = [];

  arr.forEach((item) => {
    const length = item.toString().length;

    if (length === 1) single.push(item);
    else if (length === 2) double.push(item);
    else if (length === 3) triple.push(item);
  });

  return { single, double, triple };
}

const result = segregateArray([1,10,100,2,20,200]);
console.log(result);


function swapTwoInteger(a,b){
    // 1st way
    // console.log("before getting swaped",{a:a,b:b})
    // let temp=a;
    // a=b;
    // b=temp;
    // console.log("after getting swapped")
    // return {a:a,b:b} 

    // 2nd way
    // [a, b] = [b, a];
    // return {a,b}

    // 3rd way
    a = a + b; // 1+2 =3
    b = a - b; // 3-2=1
    a = a - b; // 3-1=2
    return { a, b };

}
console.log(swapTwoInteger(1,2))


// seperate number and charactr from an aray

const arr=[1,"a",2,"hello"];
let number=[];
let charac=[];
let string=[]
function newCheck(arr){
    arr.forEach((item,index)=>{
        if(typeof(item)==="number"){
          number.push(item)
        }
        else if(typeof(item)==="string"){
            if(item.length===1){
                  charac.push(item)
            }
            else{
                string.push(item)
            }
        }
    })
    return {number:number,char:charac,str:string}
}

console.log("what are we rendering at here ",newCheck(arr))


// ✅ JSON.stringify()=> JavaScript object ya array ko JSON string me convert karta hai.
// ✅ JSON.parse() => JSON formatted string ko wapas JavaScript object ya array me convert karta hai.


console.log([]==[])
// console.log([]===[])


let abc="harish";

function fn(){
    // console.log(abc);
    let abc="rohit"
}

fn();

// priority based function calling like when gets what priotised

abcd()

var abcd=function (){
    console.log("i am first")
}

abcd();

function abcd(){
    console.log("i am last")
}

abcd()
// Function declaration is hoisted with its definition during the creation phase.
// Later in the execution phase, the function expression assignment reassigns the
//  variable, replacing the reference to the earlier function.

let str="my name is rohit singh"

function capitalizeFirstLetterWord(str){
    let resultStr=[];
    const res=str.split(" ");
    console.log("check how it is spillted",res);
    for(let i=0;i<res.length;i++){
        const modified=res[i][0].toUpperCase() + res[i].slice(1)
        resultStr.push(modified)
    }
   return resultStr.join(" ");
}

console.log(capitalizeFirstLetterWord(str))


