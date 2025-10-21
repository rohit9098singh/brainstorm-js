// Write a program to find the largest and smallest elements in an array.

// let arr = [1, 2, 3, 4, 5, 6];

// let max=arr[0];
// let min=arr[0];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     if(arr[i]<min){
//         min=arr[i]
//     }
// }
// console.log("max value",max)
// console.log("min value",min)

// var a = 1;
// function data() {
// if(!a) {
//  var a = 10;
// }
//  console.log(a);
// }
// // 174 Interview questions & Answers 68
// data();
// console.log(a);


let findTheMaximun=(arr)=>{
  let max=arr[0];
  let min=arr[0];

  for(let i=0;i<arr.length;i++){
       if(arr[i]>max){
             max=arr[i];
       }
       if(arr[i]<min){
           min=arr[i]
       }
  }

  return {max:max,min:min}
}

console.log(findTheMaximun([1,2,3,4,5,6,7,8]))



