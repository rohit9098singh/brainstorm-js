const arr=[1,2,8,9,11,5,6,7,8]

function getIndexOfSumTen(arr){
    const newArray=[];
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
           if(arr[i] + arr[j] === 10){
               newArray.push([i,j])
           }
        }
    }
    return newArray;
    
}

console.log(getIndexOfSumTen(arr))


isNaN("123")        // false ✅ (pure number string)
isNaN("  456  ")    // false ✅ (extra spaces allowed, still number)
isNaN("3.14")       // false ✅ (decimal bhi number hai)

isNaN("123abc")     // true ❌ (mix hai → number me convert nahi ho sakta)
isNaN("abc123")     // true ❌ (same reason)
isNaN("hello123")   // true ❌ (invalid number)
isNaN(" ")          // false ✅ (empty string => 0 me convert hota hai)


