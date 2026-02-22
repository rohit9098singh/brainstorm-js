
function checkTheSquareOfFirstInSecond(arr1,arr2){
      if(arr1.length !== arr2.length){
        return "must be of same length"
      }
      let doubledArray=arr1.map((item)=>item*item).sort((a,b)=>a-b);
      console.log("is this the doubled array",doubledArray)
      
      let newArr2=arr2.sort((a,b)=>a-b);
      for(let i=0;i<doubledArray.length;i++){
          if(!newArr2.includes(doubledArray[i])){
              return false 
          }
      }
      return true
}

console.log(checkTheSquareOfFirstInSecond([1,3,2],[1,4,9]));


