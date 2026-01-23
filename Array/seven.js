// // Write a program to find the missing number in a sequence of numbers from 1 to n.
// function findMissingNumber(arr, n) {
//   // Step 1: formula ka sum
//   let expectedSum = (n * (n + 1)) / 2;

//   // Step 2: array ka sum
//   let actualSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     actualSum += arr[i];
//   }

//   // Step 3: missing number = expected - actual
//   return expectedSum - actualSum;
// }

// // Example
// let arr = [1, 2, 4, 5];   // 3 missing hai
// let n = 5;
// console.log(findMissingNumber(arr, n));   // 👉 3


// function findTheMissingNumber(arr){
//      let n=arr.length+1;
//      let expected=(n*(n+1))/2;
//      let actualAmount=0;
//      for(let i=0;i<arr.length;i++){
//         actualAmount+=arr[i]
//      }
//      return expected -actualAmount
// }



function findTheMissingNumber(arr){
   let n=arr.length+1;
   console.log(n)
   let expectedValue=(n*(n+1))/2;
   console.log("ex",expectedValue)
   let actualValue=0;
   for(let i=0;i<arr.length;i++){
      actualValue+= arr[i];
   }
   console.log("actual value",actualValue)
   return expectedValue-actualValue
}

 let arr = [1, 2, 4, 5];
 console.log(findTheMissingNumber(arr))