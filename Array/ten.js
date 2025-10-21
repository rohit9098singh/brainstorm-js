// Write a function to find all pairs in an array whose sum is equal to a given number.
function findPairs(arr,target){
   let pair=[];
   for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]=== target){
            pair.push([arr[i],arr[j]])
        }
    }
   }
   return pair
}

console.log(findPairs([1, 2, 3, 4, 5, 6], 7));