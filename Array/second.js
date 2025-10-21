// Write a function to reverse an array without using the built-in .reverse() method.


// let arr=[1,2,3,4,5,6]
// function toReverseArray(arr){
//     let newArray=[];
//    for(let i=arr.length-1;i>=0;i--){
//       newArray.push(arr[i])
//    }
//    return newArray
// }

// const res=toReverseArray(arr);
// console.log(res)


// function toReverse(arr){
//    let newArray=[]
//    for(let i=arr.length-1;i>=0;i--){
//        newArray.push(arr[i])
//    }
//    return newArray;
// }
// console.log(toReverse([1,2,3,4])
// )

function toReverse(arr){
    let newArray=[];
    for(let i=arr.length-1;i>0;i--){
            newArray.push(arr[i])
    }
    return newArray
}

console.log(toReverse([1,2,3,4,5,6]))