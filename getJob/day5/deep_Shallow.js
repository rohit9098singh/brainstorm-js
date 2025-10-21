// Shallow copy and deep copy are two ways of copying array elements or object properties into another variable.
// Shallow copy → Copies only the top-level values. If there are nested arrays or objects, it only copies their references. 
// So, changes in the copy will also affect the original.
// Deep copy → Copies both top-level and nested values, creating an independent clone. Changes in the copy do not affect the original.

const arr1=[1,2,[3,4]];

const shallowCopy=[...arr1];
shallowCopy[2][0]=30;

console.log("originla shallow array",arr1);
console.log("copied and changed then",shallowCopy);


// deep copy 

const arr2=[1,2,[3,4]];

const deepCopy=JSON.parse(JSON.stringify(arr2));  

deepCopy[2][0]=100;
console.log("before deeep copy the value",arr2);
console.log("value after deep copy",deepCopy)

// another method 

const arr3=[1,2,[3,4]];
const structuredCLone=structuredClone(arr3);
structuredCLone[2][1]=300;
console.log("before structured clone",arr3);
console.log("after structured clone",structuredCLone);

// custom deep clone fucntion 

function deepClone(obj){
    if(obj === null || typeof obj !==undefined){
        return obj
    }
     if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  let newObj={};
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
        newObj[key] =deepClone(obj[key]);
    }
  }
  return newObj;
}