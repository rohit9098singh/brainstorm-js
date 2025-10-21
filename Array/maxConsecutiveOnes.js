function maxConsecutiveOnes(arr){
    let maxCount=0;
    let currentCount=0;
    for( let num of arr){
         if(num===1){
            currentCount++;
            maxCount=Math.max(maxCount,currentCount);
         }else{
            currentCount=0
         }
    }
    return maxCount;
}

const arr = [1, 1, 0, 1, 1, 1, 0, 1];
console.log(maxConsecutiveOnes(arr));


