console.log([]==![])

// when an object is returend from an array

function helo(){
    return
    {
        name:"rohit"
    }
}

console.log(helo())  // js automatically inset the semicolan there and becaue of which below object becomes unrecchable

// What Are Redux DevTools?

// Redux DevTools is a development debugging tool that helps us:

// Inspect Redux store state

// Track dispatched actions

// Debug state changes

// Time-travel between states

// It improves visibility into how Redux works internally.

// Q-3  find the maximum product in a given array

const arr1=[1,2,3,4,5,6];

function findMax(arr){
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
          for(let j=i+1;j<arr.length;j++){
              if(arr[i]*arr[j] > max){
                  max= arr[i]*arr[j]
              }
          }
    }
    return max
}

console.log(findMax(arr1))

// delete the array in 1 statement

const arr2=[1,2,3,4];
arr2.length=0;
console.log(arr2)

// what happens when we merge two object but both the object has same keys with differnt vales

const obj1={
    name:"rohit",
    age:28
}

const obj2={
    name:"rohit",
    age:24
}

const obj3={...obj1,...obj2}; // second object overrides the frist object if both has the same key at there 
console.log(obj3)

// destrcuting the object at here
const [a,...rest]=[1,2,3,4,6]
console.log(rest)

// scopes

var x=100;

{
    var x=500;
}

let ab=x

{
    let ab=10000;
}

console.log(ab)

// differnce betwwen meta tag and progress tag

// meta tells us about the additon inforamtion of the page
// like author descrition charset and all 
// it is not dispalyed inside the webpage but when it comes
// to progress it shows the progrss of a
// particular task and also it is visible in the webpage


// em stands for empasis and meaning and better for screen reader 

//<a href="https://www.google.com" target="_blank">
//  Visit Google
//</a>


// functionality differnce between sudu class and element

// A pseudo-class selects an element based on its state or condition.
//  a:hover {
//   color: red;
// }

// A pseudo-element creates or selects a part of an element.
// p::first-letter {
//   font-size: 40px;
// }


const arr=[1,2,3,4,5,6,7,8,9];

const newarr=arr.filter((item,index)=>item>5)

console.log(newarr)