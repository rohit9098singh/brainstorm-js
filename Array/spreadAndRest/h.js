// let str="rrrfhrhrh";
// function countFirstNonRepating(str){
//     let count={};
//     for(let char of str){
//         count[char]=(count[char]|| 0) +1;
//     }
//      for(let char of str){
//         if(count[char]===1){
//               return char
//         }
//      }
//      return null
// }
// console.log(countFirstNonRepating(str))


const res=JSON.stringify({name:"Rohit",emai:"rohit@gmail.com"})
console.log("without parsing the output is what ", res)

const res2=JSON.parse(res)
console.log("with parsing the value at here ", res2)

const arr=JSON.stringify([1,2,3,4,5,6])
console.log("check what is the output of that particular cide ",typeof arr)
console.log("check",arr[0])

console.log(typeof JSON.stringify(6))


let a=20
function check(){
   
    if(!a){
        a=40
    }
    console.log(a)
}
check()
console.log(a)