// function toCountValue(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (obj[num]) {
//       obj[num]++;
//     } else {
//       obj[num] = 1;
//     }
//   }
//   return obj;
// }

// let arr = [1, 2, 2, 3, 4, 4, 4, 5];
// console.log(toCountValue(arr));

// function tocountValues(arr) {
//   let res = {};
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (res[num]) {
//       res[num]++;
//     }
//     else{
//         res[num]=1
//     }
//   }
//   return res
// }
// let arrq = [1, 2, 2, 3, 4, 4, 4, 5];
// console.log(tocountValues(arrq))

function toCountValue(arr){
  let count={}
  for(let item of arr){
    // count[item]=(count[item] || 0) +1
    if(count[item]){
      count[item]++;
    }
    else{
      count[item]=1
    }
  }
  return count
}

let arr=[1, 2, 2, 3, 4, 4, 4, 5]
console.log(toCountValue(arr))

