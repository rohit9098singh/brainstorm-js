// find the type cohersion in getjob day6 


// Input: [2,3,-2,4]
// Output: 6  // because [2,3] gives 6

// function maxProduct(arr){
//     if(arr.length===0){
//         return 0;
//     }
//     let maxProduct=arr[0];
//     for(let i=0;i<arr.length;i++){
//         for (let j=i+1;j<arr.length;j++){
//             let product=arr[i] * arr[j];
//             if(product>maxProduct){
//                 maxProduct=product;
//             }
//         }
//     }
//     return maxProduct;
// }

// console.log(maxProduct([2,3,-2,4]));


// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]


// function mergeIntervals(intervals){
//     if(intervals.length===0){
//         return [];
//     }
//     intervals.sort((a,b)=>a[0]-b[0]);
//     let result=[];
//     let currentInterval=intervals[0];
//     console.log("first",currentInterval)    
//     for (let i=1;i<intervals.length;i++){
//         let nextInterval=intervals[i];
//         console.log("second",nextInterval)
//         if(currentInterval[1]>=nextInterval[0]){
//             currentInterval[1]=Math.max(currentInterval[1],nextInterval[1]);
//         }else{
//             result.push(currentInterval);
//             currentInterval=nextInterval;
//         }
//     }
//     result.push(currentInterval);   
//     console.log(result)
// }

// console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));

// Input: ["i","love","coding","i","love","js"], k = 2
// Output: ["i","love"]

function topFrequentWords(words, k) {
    // Step 1: Count frequency
    let seen = {};
    for (let word of words) {
        seen[word] = (seen[word] || 0) + 1;
    }
    // Step 2: Convert to array and sort by frequency descending
    let sortedWords = Object.keys(seen).sort((a, b) => seen[b] - seen[a]);
    console.log("check for the values what is getting here",sortedWords)

    // Step 3: Return top k words
    return sortedWords.slice(0, k);
}

console.log(topFrequentWords(["i","love","coding","i","love","js"], 2));
// Output: ["i", "love"]


// Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]


function rotateWithSome(arr, key) {
    let res = [];
    let noOfItemsToRotate = key % arr.length;
    let toRotateValue = arr.slice(-noOfItemsToRotate)
    console.log("kuch",toRotateValue)
    let initialValue = arr.slice(0, -noOfItemsToRotate)
    console.log("hua ",initialValue)
    res.push(...toRotateValue,...initialValue)
    return res
}

console.log(rotateWithSome([1, 2, 3, 4, 5, 6, 7], k = 3))


// Input: [2, 1, 2, 4, 3]
// Output: [4, 2, 4, -1, -1]

function nextGreaterNumber(arr){
   let next=-Infinity;
   let result=[];
   for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
         if(arr[j] > arr[i]){
            next=arr[j];
            break;
         }
    }
    result.push(next)
   }
   return "check ", result
}

console.log("the resultant value of that is ",nextGreaterNumber([2, 1, 2, 4, 3]))
