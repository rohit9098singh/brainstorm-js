// function groupBy(arr, key) {
//   return arr.reduce((result, curr) => {
//     if (curr[key] === undefined) {
//       return result
//     }
//     const placeHolder = curr[key];
//     if (!result[placeHolder]) {
//       result[placeHolder] = []
//     }
//     result[placeHolder].push(curr)
//     return result;
//   }, {})
// }

function groupBy(arr,key){
   return arr.reduce((result,curr)=>{
      if(curr[key]=== undefined){
         return ;
      }
      const placeHolder=curr[key];
      if(!result[placeHolder]){
         result[placeHolder].push(curr)
      }
   })
}
const arr = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie" },
]

console.log(groupBy(arr, "age"));




