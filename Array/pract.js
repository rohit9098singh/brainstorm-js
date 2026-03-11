const arr=[1,2,3,3,4,4,6,5]

function findTheNextGreaterNumber(arr){
     let next=-Infinity;
    let result=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
              if(arr[j]> arr[i]){
                next=arr[j];
                break;
              }
        }
        result.push(next)
    }
    return result
}
console.log(findTheNextGreaterNumber(arr))