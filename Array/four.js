// //1) Write a function to find the second-largest number in an array.

// function findSecondLargest(arr) {
//   arr.sort((a, b) => {
//     return b - a;
//   });
//   return arr[1];
// }
// console.log(findSecondLargest([10, 20, 4, 45, 99]));

// //2) condition where same number 99 present three times;

// function findSecondLargest2(arr) {
//   arr.sort((a, b) => {
//     return b - a;
//   });
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != arr[0]) {
//       return arr[i];
//     }
//   }
//   return "no dublicate present";
// }

// console.log("best result", findSecondLargest2([10, 20, 4, 45, 99, 99]));

// //3) without using build in function over here

// function findSecondLargest(arr) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//       secondLargest = arr[i];
//     }
//   }
//    return secondLargest === -Infinity ? "No second largest" : secondLargest;

// }

// // Examples
// console.log(findSecondLargest([10, 20, 4, 45, 99])); 
// console.log(findSecondLargest([5, 5, 5]));             



// function toFindtheSecondLarget(arr){
//   let largest=-Infinity;
//   let secondLargest=-Infinity;
//   for(let i=0;i<arr.length;i++){
//       if(arr[i]>largest){
//         secondLargest=largest;
//         largest=arr[i]
//       }
//       else if(arr[i]>secondLargest && arr[i] !=largest){
//          secondLargest=arr[i];
//       }
//   }
//   return secondLargest === -Infinity ? "no second largest element":secondLargest
// }

// console.log(toFindtheSecondLarget([10, 20, 4, 45, 99]))

function toFindtheSecondLarget(arr){
  let largest=-Infinity;
  let secondLargest=-Infinity;
  for(let i=0;i<arr.length;i++){
      if(arr[i]>largest){
        secondLargest=largest;
        largest=arr[i];
      }
      else if(arr[i]>secondLargest && arr[i]!=largest ){
        secondLargest=arr[i]
      }
  }
  return secondLargest === -Infinity ? "no second largest" :secondLargest
}

console.log(toFindtheSecondLarget([10,20,30,40]))