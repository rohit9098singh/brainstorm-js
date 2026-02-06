function interCetion(arr1,arr2){
   let  newArray=[];
   for(let i=0;i<arr1.length;i++){
      if(arr2.includes(arr1[i]) && !newArray.includes(arr2[i])){
          newArray.push(arr2[i])
      }
   }
   return newArray
}

console.log(interCetion([1,2,3,4],[2,3,4,5])); 